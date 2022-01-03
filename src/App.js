import React from 'react'
import { AuthProvider } from './context/AuthContext'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'
import Dashboard from './components/Dashboard'
import Login from './components/login/Login'
import Signup from './components/login/Signup'
import ForgotPassword from './components/login/ForgotPassword'
import UpdateProfile from './components/login/UpdateProfile'
import Profile from './components/login/Profile'
import './App.css';


function App() {
  return (
    
    <Router> 
      <AuthProvider> 
        <Routes>
          {/* Auth - okay for anyone to see */}
          <Route path='/signup' element={<Signup/>} />
          <Route path='/' element={<Login/>} />
          <Route path='/forgot-password' element={<ForgotPassword/>} />

          {/* Private - only for the user to see */}
          <Route exact path='/dashboard' element={<PrivateRoute>
            <Dashboard />
          </PrivateRoute>} />
          <Route exact path='/profile' element={<PrivateRoute>
            <Profile />
          </PrivateRoute>} />
          <Route exact path='/update-profile' element={<PrivateRoute>
            <UpdateProfile />
          </PrivateRoute>} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;



{/* <div className="App">
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
</div> */}