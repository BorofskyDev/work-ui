import React from "react";

import { BsCalendarDay, BsClock, BsPalette, BsX } from "react-icons/bs";
import {
  DatePicker,
  TimePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

function TodoForm({
  handleSubmit,
  heading = false,
  text,
  setText,
  day,
  setDay,
  time,
  setTime,
  todoProject,
  setTodoProject,
  projects,
  showButtons = false,
  setShowModal = false,
}) {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <form onSubmit={handleSubmit} className="TodoForm">
        <div className="text">
          {heading && <h3>{heading}</h3>}
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="To do ..."
            autoFocus
          />
        </div>
        <div className="pick-day">
          <div className="title">
            <BsCalendarDay />
            <p>Choose a day</p>
          </div>
          <DatePicker value={day} onChange={(day) => setDay(day)} />
        </div>
        <div className="pick-time">
          <div className="title">
            <BsClock />
            <p>Choose time</p>
          </div>
          <TimePicker value={time} onChange={(time) => setTime(time)} />
        </div>
        <div className="pick-project">
          <div className="title">
            <BsPalette />
            <p>Choose a project</p>
          </div>
          <div className="projects">
            {projects.length > 0 ? (
              projects.map((project) => (
                <div
                  className={`project ${
                    todoProject === project.name ? "active" : ""
                  }`}
                  onClick={() => setTodoProject(project.name)}
                  key={project.id}
                >
                  {project.name}
                </div>
              ))
            ) : (
                <div className="end">
                Please add a project before proceeding
              </div>
            )}
          </div>
        </div>
        {showButtons && (
          <div>
            <div className="cancel" onClick={() => setShowModal(false)}>
              <BsX size="40" />
            </div>
            <div className="confirm">
              <button>+ Add to do</button>
            </div>
          </div>
        )}
      </form>
    </MuiPickersUtilsProvider>
  );
}

export default TodoForm;
