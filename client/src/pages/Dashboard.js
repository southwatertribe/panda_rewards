import React from 'react'

//Components
import UserDash from '../components/userdash/UserDash';
import LoginPage from './loginPage/LoginPage';

//Redux
import {useSelector} from 'react-redux';



function Dashboard() {

  const isLoggedIn = useSelector(state => state.persistedReducer.auth.auth)
  
  
  return (
    <div>
        {isLoggedIn ? <UserDash/>: <LoginPage/>}
    </div>
  )
}

export default Dashboard