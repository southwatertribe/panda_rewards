import React from 'react'



//Redux
import {useSelector} from 'react-redux';


function Dashboard() {

  const {isLoggedIn} = useSelector(state => state.auth)
  const {user} = useSelector(state => state.user )
  return (
    <div>
        {isLoggedIn ? <p>Welcome {user.f_name}</p>: <p>Error happening</p>}
    </div>
  )
}

export default Dashboard