import React from 'react'
import SignInForm from '../pages/LoginPage';



//Redux
import {useSelector} from 'react-redux';


function Dashboard() {

  const {isLoggedIn} = useSelector(state => state.auth)
  return (
    <div>
        {isLoggedIn ? <h1>You Logged In to Competitive Consumerism</h1>: <SignInForm></SignInForm>}
    </div>
  )
}

export default Dashboard