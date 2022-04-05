import React from 'react';
import './header.css';

const Header=()=>{
  return (
      <div className="header">
         <div className="headerTitle">
           <span className="headerTitleSm">React& Node</span>
           <span className="headerTitleLg">Blog</span>
         </div>
         <img className="headerImg" src="https://eskipaper.com/images/hills-wallpaper-hd-1.jpg" alt=""/>
      </div>
  );
};

export default Header;
