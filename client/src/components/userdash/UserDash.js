import React from 'react'

//Redux
import {useSelector} from 'react-redux';

//Style
import "./userdash.css"



function UserDash() {
    const {user} = useSelector(state => state.user )
  return (
    <div className='main-dash'>
      <h3>Welcome to your dashboard, {user.f_name}. Your Score: {user.score}</h3>
      <div className='profile'>
        <img src={user.profile} alt="BodegaCat" width="60" style={{display: "flex"}}/>
      </div>
    </div>
  )
}

export default UserDash