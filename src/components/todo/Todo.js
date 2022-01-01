import React, { useState } from 'react'
import { BsArrowClockwise, BsCheckCircleFill, BsCircle, BsTrash } from 'react-icons/bs'

function Todo({todo}) {
    const [hover, setHover] = useState(false)

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
                            <BsCheckCircleFill color='#bebebe' />
                        </span>
                        :
                        <span className='unchecked'>
                            <BsCircle color={todo.color} />
                        </span>
                    }
                </div>
                {/* Color control for line through and text in todo. Control here instead of CSS */}
                <div className='text'>
                    <p style={{color : todo.checked ? '#bebebe' : '#000000'}}>{todo.text}</p>
                    <span>{todo.time} - {todo.project}</span>
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
                <div className='delete-todo'>
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
