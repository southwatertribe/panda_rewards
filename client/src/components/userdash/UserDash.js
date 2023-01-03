import React from 'react'

//Redux
import {useSelector} from 'react-redux';

//Style
import "./userdash.css"



function UserDash() {
    const user = useSelector(state => state.persistedReducer.user.user)
    const totalRed = user.score/9
    const cash = totalRed * 6.15
  return (
    <div className='main-dash'>
      <h3>Welcome to your dashboard, {user.f_name}. Here are your stats.</h3>
      <div className='profile'>
        <img src={user.profile} alt="N/A" className='aviDash'/>
        <p>Player Name: {user.f_name}</p>
      </div>
      <div className='stats'>
        <div>
          <p>Score: {user.score}</p>
        </div>
        <div>
          <p>Total Redemptions: {totalRed}</p>
        </div>
        <div>
          <p>Money Saved: ${cash}</p>
        </div>
      </div>
    </div>
  )
}

export default UserDash