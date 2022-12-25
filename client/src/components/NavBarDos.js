import * as React from 'react';
import { useState } from 'react';
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
//Avatar style

function ResponsiveAppBar() {
   const {isLoggedIn} = useSelector(state => state.auth)
   const {user} = useSelector(state => state.user )
   const [isNavExpanded, setIsNavExpanded] = useState(false)
  return (
    <nav className="navigation">
      <a href="/" className="brand-name" style={linkStyle}>
        Panda Rewards Bot
      </a>
      <button className="hamburger"
      onClick={() => {
        setIsNavExpanded(!isNavExpanded);
      }}>
       {isLoggedIn ? <Avatar alt="N/A" className="hamburger" viewBox="0 0 20 20"src={user.profile}/>:<Avatar alt="N/A" ></Avatar>}
      </button>
      <div className={isNavExpanded ? "navigation-menu expanded" : "navigation-menu"}>
        <ul>
            <li>
              <Link 
              to="/codeintake"  
              style={linkStyle}
              onClick={() => {
                setIsNavExpanded(!isNavExpanded);
              }}>
                CodeIntake
              </Link>
            </li>
            <li>
              <Link 
              to="/leaderboard" 
              style={linkStyle}
              onClick={() => {
                setIsNavExpanded(!isNavExpanded);
              }}
              >
                Leaderboards
              </Link>
            </li>
            {isLoggedIn ? <li style={linkStyle} className={isNavExpanded ? "disappear" : "navigation-menu"}><Avatar alt="N/A" src={user.profile}/></li>:<></>}
        </ul>
        
      </div>
    </nav>
  );
}
export default ResponsiveAppBar;
