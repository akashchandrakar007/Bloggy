import React from 'react';
import "./topbar.css";

const TopBar=()=>{
  return (
     <div className="top">
        <div className="topLeft">
           <i className="topIcon fa-brands fa-facebook-square"></i>
           <i className="topIcon fa-brands fa-instagram-square"></i>
           <i className="topIcon fa-brands fa-twitter-square"></i>
           <i className="topIcon fa-brands fa-youtube-square"></i>
        </div>
        <div className="topCenter">
         <ul className="topList">
            <li className="topListItem">HOME</li>
            <li className="topListItem">ABOUT</li>
            <li className="topListItem">CONTACT</li>
            <li className="topListItem">WRITE</li>
            <li className="topListItem">LOGOUT</li>
         </ul>
        </div>
        <div className="topRight">
          <img className="topImg" src="https://staticg.sportskeeda.com/editor/2021/10/5596d-16331824813563-800.jpg" alt=""/>
          <i className="searchIcon fa-solid fa-magnifying-glass"></i>
        </div>


     </div>
  );
};

export default TopBar;
