import React, { useState } from 'react'
import { BsArrowClockwise, BsCheckCircleFill, BsCircle, BsTrash } from 'react-icons/bs'
import firebase from '../../firebase'

function Todo({todo}) {
    const [hover, setHover] = useState(false)

    const deleteTodo = todo => {
        firebase
            .firestore()
            .collection('todos')
            .doc(todo.id)
            .delete()
    }

    return (
        <div className='Todo'>
            <div
                className='todo-container'
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                <div className="check-todo">
                    {
                        todo.checked ?
                        <span className='checked'>
                                <BsCheckCircleFill color='#b500fd' />
                        </span>
                        :
                        <span className='unchecked'>
                            <BsCircle color={todo.color} />
                        </span>
                    }
                </div>
                {/* Color control for line through and text in todo. Control here instead of CSS */}
                <div className='text'>
                    <p style={{ color: todo.checked ? '#b500fd' : '#00d2f7'}}>{todo.text}</p>
                    <span>{todo.time} - {todo.projectName}</span>
                    <div className={`line ${todo.checked ? 'line-through' : ''}`}></div>
                </div>
                <div className="add-to-next-day">
                    {
                        todo.checked &&
                        <span>
                            <BsArrowClockwise />
                        </span>
                    }
                </div>
                <div 
                    className='delete-todo'
                    onClick={ () => deleteTodo(todo)}
                >
                    {
                        (hover || todo.checked) &&
                        <span>
                            <BsTrash />
                        </span>
                    }
                </div>
            </div>
        </div>
    )
}

export default Todo
