import React from 'react'
import "./navbar.css"

//Router
import {Link} from  "react-router-dom"

function NavBar() {
  return (
    <nav className='nav'>
      <Link to="/codeintake">CodeIntake</Link>
      <Link to="/leaderboard">Leaderboards</Link>
    </nav> 
  )
}

export default NavBar