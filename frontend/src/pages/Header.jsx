import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import GroupsIcon from '@mui/icons-material/Groups';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Avatar } from '@mui/material';
import logo from "./img.jpg";
import { Link } from "react-router-dom";
import header_img from "./header_pfp.png";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

function Header() {
  return (
    <div className='header'>
      <div className='header__left'>
        <img src={logo} alt="abc" />

        <div className="header__search">
          <SearchIcon />
          <input type="text" placeholder='Search' />
        </div>
      </div>

      <div className='header__right'>
        <div className='header__right__home'>
          <Link to="/Home">
            <HeaderOption Icon={HomeIcon} title="Home" />
          </Link>
        </div>

        <div className='header__right__community'>
          <HeaderOption Icon={GroupsIcon} title="Community" />
        </div>

        <div className='header__right__messages'>
          <HeaderOption Icon={ChatIcon} title="Messages" />
        </div>

        <div className='header__right__profile'>
          <Link to="/Profile">
            <HeaderOption avatar={header_img} title="Profile" />
          </Link>
        </div>

        <div className='header__right__menu__container'>
          {/* <HeaderOption Icon={MoreVertIcon} title="Me"/>
          <div className='dropdown-menu'>
            <ul>
              <DropDownItem menuItem={"Log Out"}/>
            </ul>
          </div> */}
        </div>
      </div>
    </div>
  )
}

function DropDownItem({ menuItem }) {
  return (
    <li className='dropDownItem'>
      <ExitToAppIcon className='exit__icon' />
      <a href="#" className='menuItem'>{menuItem}</a>
    </li>
  );
}

export default Header
