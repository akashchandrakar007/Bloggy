import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import './sidebar.css';

const Sidebar=()=>{

   const [cats,setCats]=useState([]);
  useEffect(()=>{
     const getCats=async ()=>{
         const response=await axios.get('/categories');
         setCats(response.data);
     };

     getCats();
  },[]);
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
           {cats.map((c)=>(

              <Link to={`/?cat=${c.name}`} className="link">
              <li className="sidebarListItem">{c.name}</li>
              </Link>

           ))}

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
