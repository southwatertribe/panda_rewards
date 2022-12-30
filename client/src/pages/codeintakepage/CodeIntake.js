import React from 'react'
import LoginPage from '../loginPage/LoginPage';
import CodeIntakeForm from '../../components/codeintakeform/CodeIntakeForm';
//Redux
import {useSelector} from 'react-redux';
//Styles
import './codeintake.css'

function CodeIntake() {
  const {isLoggedIn} = useSelector(state => state.auth)
  return (
    <div style={{display: "flex", justifyContent: "center"}}>
      {isLoggedIn ? <CodeIntakeForm/> : <LoginPage/>}
      <div className='receipt'>
      {isLoggedIn ? <img src='https://www.pandaguestexperience.com/Projects/PRG2_CSI/images/Receipt.png' alt='receipt' width="300"/> : <></>}
      </div>
    </div>
  )
}

export default CodeIntake