import React from 'react'

//Redux
import {useSelector} from 'react-redux';



function UserDash() {
    const {user} = useSelector(state => state.user )
  return (
    <div>Welcome {user.f_name} your score is {user.score}</div>
  )
}

export default UserDash