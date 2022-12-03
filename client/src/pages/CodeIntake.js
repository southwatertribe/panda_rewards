import React from 'react'
//Redux
import {useSelector} from 'react-redux';

function CodeIntake() {
  const {isLoggedIn} = useSelector(state => state.auth)
  return (
    <div>
      {isLoggedIn ? <p>Enter code</p> : <p>You gotta login</p>}
    </div>
  )
}

export default CodeIntake