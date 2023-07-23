import React from 'react'
import "../styles/header.css";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
function Header() {
  return (
    <div className = "headerContainer">
        
        <ul>
            <li> <a href="/work">Home</a></li>
            <li><a href="/work">Statics</a></li>
            <li><a href="/work">Analysis</a></li>
            <li><a href="/work">logout</a></li>
            <AccountCircleIcon fontSize="medium" />

        </ul>
    </div>
  )
}

export default Header