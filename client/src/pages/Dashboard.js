import React from 'react'

import UserDash from '../components/userdash/UserDash';

//Redux
import {useSelector} from 'react-redux';


function Dashboard() {

  const isLoggedIn = useSelector(state => state.persistedReducer.auth)
  
  return (
    <div>
        {isLoggedIn ? <UserDash/>: <p>Error happening</p>}
    </div>
  )
}

export default Dashboard