import React from 'react'

import CodeIntakeForm from '../../components/codeintakeform/CodeIntakeForm';

//Styles
import './codeintake.css'

function CodeIntake() {
  return (
    <div style={{display: "flex", justifyContent: "center"}}>
      <CodeIntakeForm/>
      <div className='receipt'>
      <img src='https://www.pandaguestexperience.com/Projects/PRG2_CSI/images/Receipt.png' alt='receipt' width="300"/>
      </div>
    </div>
  )
}

export default CodeIntake