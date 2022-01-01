import React from 'react';
import './App.css';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import AddNewTodo from './components/todo/AddNewTodo';
import Calendar from './components/todo/Calendar';
import EditTodo from './components/todo/EditTodo';
import Projects from './components/todo/Projects';
import Todos from './components/todo/Todos';
import User from './components/todo/User';

function App() {
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
  );
}

export default App;
