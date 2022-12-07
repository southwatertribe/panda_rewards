import * as React from 'react';

//Router
import {Link} from  "react-router-dom"
//Redux
import {useSelector} from 'react-redux';
//Styles
import "./navbar.css"

import { Avatar } from '@mui/material';

//Link Style
const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: 'white'
  };

function ResponsiveAppBar() {
   const {isLoggedIn} = useSelector(state => state.auth)
   const {user} = useSelector(state => state.user )
  return (
    <nav className="navigation">
      <a href="/" className="brand-name" style={linkStyle}>
        Ranked Panda Rewards
      </a>
      <button className="hamburger">
        {/* icon from heroicons.com */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div className="navigation-menu">
        <ul>
            <li><Link to="/codeintake" style={linkStyle}>CodeIntake</Link></li>
            <li><Link to="/leaderboard" style={linkStyle}>Leaderboards</Link></li>
            {isLoggedIn ? <li><Avatar alt="Remy Sharp" src={user.profile} /></li>: <></>}
        </ul>
        
      </div>
    </nav>
  );
}
export default ResponsiveAppBar;
