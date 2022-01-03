import React from 'react'
import Main from './Main'
import Sidebar from './Sidebar';
import AddNewTodo from './todo/AddNewTodo';
import Calendar from './todo/Calendar';
import EditTodo from './todo/EditTodo';
import Projects from './todo/Projects';
import Todos from './todo/Todos';
import User from './todo/User';
import '../../src/App';

export default function Dashboard() {
    return (
        <div className="App">
            <Sidebar>
                <User />
                <AddNewTodo />
                <Calendar />
                <Projects />
            </Sidebar>
            <Main>
                <Todos />
                <EditTodo />
            </Main>
        </div>
    )
}
