import React from 'react'
import LoginPage from '../components/LoginPage';
import UserDashboard from '../components/UserDashboard';


//Redux
import {useSelector} from 'react-redux';


function Dashboard() {

  const {isLoggedIn} = useSelector(state => state.auth)
  const {user} = useSelector(state => state.user )
  return (
    <div>
        {isLoggedIn ? <UserDashboard user={user}/>: <LoginPage></LoginPage>}
    </div>
  )
}

export default Dashboard