import React from 'react'
import LoginPage from './LoginPage';
import CodeIntakeForm from '../components/codeintakeform';
//Redux
import {useSelector} from 'react-redux';

//This is gonna be a form of 6 for the guest code

function CodeIntake() {
  const {isLoggedIn} = useSelector(state => state.auth)
  return (
    <div>
      {isLoggedIn ? <CodeIntakeForm/> : <LoginPage/>}
    </div>
  )
}

export default CodeIntake