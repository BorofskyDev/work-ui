import moment from "moment";
import React, { useContext, useState } from "react";
import {
  BsArrowClockwise,
  BsCheckCircleFill,
  BsCircle,
  BsTrash,
} from "react-icons/bs";
import firebase from "../../firebase";
import { TodoContext } from "../../context";
import { useSpring, useTransition, animated } from "react-spring";

function Todo({ todo }) {
  const [hover, setHover] = useState(false);

  const { selectedTodo, setSelectedTodo } = useContext(TodoContext);

  const handleDelete = (todo) => {
    deleteTodo(todo);

    if (selectedTodo === todo) {
      setSelectedTodo(undefined);
    }
  };

  const deleteTodo = (todo) => {
    firebase.firestore().collection("todos").doc(todo.id).delete();
  };

  const checkTodo = (todo) => {
    firebase.firestore().collection("todos").doc(todo.id).update({
      checked: !todo.checked,
    });
  };

  const repeatNextDay = (todo) => {
    const nextDayDate = moment(todo.date, "MM/DD/YYYY").add(1, "days");

    const repeatedTodo = {
      ...todo,
      checked: false,
      date: nextDayDate.format("MM/DD/YYYY"),
      day: nextDayDate.format("d"),
    };

    delete repeatedTodo.id;

    firebase.firestore().collection("todos").add(repeatedTodo);
  };

  const fadeIn = useSpring({
    from: { marginTop: "-12px", opacity: 0 },
    to: { marginTop: "0px", opacity: 1 },
  });

  const checkTransitions = useTransition(todo.checked, {
    from: { position: "absolute", transform: "scale(0)" },
    enter: { transform: "scale(1)" },
    leave: { transform: "scale(0)" },
  });

  return (
    <animated.div style={fadeIn} className="Todo">
      <div
        className="todo-container"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div className="check-todo" onClick={() => checkTodo(todo)}>
          {
              checkTransitions((props, checked) => 
                  todo.checked ? (
                      <animated.span style={props} className="checked">
                          <BsCheckCircleFill color="#b500fd" />
                      </animated.span>
                  ) : (
                      <animated.span style={props} className="unchecked">
                          <BsCircle color={todo.color} />
                      </animated.span>
              )
          )}
        </div>
        {/* Color control for line through and text in todo. Control here instead of CSS */}
        <div className="text" onClick={() => setSelectedTodo(todo)}>
          <p style={{ color: todo.checked ? "#b500fd" : "#00d2f7" }}>
            {todo.text}
          </p>
          <span>
            {todo.time} - {todo.projectName}
          </span>
          <div className={`line ${todo.checked ? "line-through" : ""}`}></div>
        </div>
        <div className="add-to-next-day" onClick={() => repeatNextDay(todo)}>
          {todo.checked && (
            <span>
              <BsArrowClockwise />
            </span>
          )}
        </div>
        <div className="delete-todo" onClick={() => handleDelete(todo)}>
          {(hover || todo.checked) && (
            <span>
              <BsTrash />
            </span>
          )}
        </div>
      </div>
    </animated.div>
  );
}

export default Todo;
