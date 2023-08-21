
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LanguageIcon from '@mui/icons-material/Language';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import "./header.css";
import { Link } from "react-router-dom";




function Header() {
  
  return (
    <div className='header'>
           <Link to="/home">
           <img
                    className="header__icon"
                    src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
                    alt=""
                />
           </Link>
                
            
           
            <div className='header__center'>
                <input type="text" />
                <Link to="/search">
                <SearchIcon />
                </Link>
                
            </div>

            <div className='header__right'>
                <p>Become an Host</p>
                <LanguageIcon />
                <ExpandMoreIcon />
                <Link to="/logout">
                <AccountCircleIcon  />
                </Link>
               
                
            </div>
        </div>
  )
}

export default Header
