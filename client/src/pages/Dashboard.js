import React from 'react'

import UserDash from '../components/UserDash';

//Redux
import {useSelector} from 'react-redux';


function Dashboard() {

  const {isLoggedIn} = useSelector(state => state.auth)
  
  return (
    <div>
        {isLoggedIn ? <UserDash/>: <p>Error happening</p>}
    </div>
  )
}

export default Dashboard