import React from 'react'
import LoginForm from './LoginForm';
import {Routes, Route, Navigate } from "react-router-dom";
import Register from './Register';
import PasswordLost from './PasswordLost';
import LoginPasswordReset from './LoginPasswordReset';
import { UserContext } from '../../Hooks/UserContext';
import NotFound from '../account/NotFound';


const Login = () => {

  const { login } = React.useContext(UserContext);

  if(login === true) return <Navigate to='/conta'/>

  return (
    <div>
      <Routes>
        <Route path='/' element={<LoginForm/>} />
        <Route path='register' element={<Register/>} />
        <Route path='perdeu' element={<PasswordLost/>} />
        <Route path='resetar' element={<LoginPasswordReset/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  )
}

export default Login