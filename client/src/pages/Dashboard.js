import React from 'react'
import LoginButton from '../components/Login';

import './signinpage.css';

//Redux
import {useSelector} from 'react-redux';


function Dashboard() {

  const {isLoggedIn} = useSelector(state => state.auth)
  return (
    <div>
        
        {isLoggedIn ? <h1>You Logged In to Competitive Consumerism</h1>: <LoginButton></LoginButton>}
    </div>
  )
}

export default Dashboard