import React from 'react';
import './sidebar.css';

const Sidebar=()=>{
   return (
     <div className="sidebar">
         <div className="sidebarItem">
           <span className="sidebarTitle">ABOUT ME</span>
           <img src="https://staticg.sportskeeda.com/editor/2021/10/5596d-16331824813563-800.jpg" alt=""/>
           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat nam iusto ducimus obcaecati rerum velit quo voluptas ut non, facere atque quidem, dignissimos, possimus.</p>
         </div>
         <div className="sidebarItem">
           <span className="sidebarTitle">CATEGORIES</span>
           <ul className="sidebarList">
              <li className="sidebarListItem">Life</li>
              <li className="sidebarListItem">Music</li>
              <li className="sidebarListItem">Style</li>
              <li className="sidebarListItem">Sports</li>
              <li className="sidebarListItem">Anime</li>
              <li className="sidebarListItem">Tech</li>
           </ul>
         </div>
         <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span>
            <div className="sidebarSocial">
            <i className="sidebarIcon fa-brands fa-facebook-square"></i>
            <i className="sidebarIcon fa-brands fa-instagram-square"></i>
            <i className="sidebarIcon fa-brands fa-twitter-square"></i>
            <i className="sidebarIcon fa-brands fa-youtube-square"></i>
            </div>
         </div>
     </div>
   );
};


export default Sidebar;
