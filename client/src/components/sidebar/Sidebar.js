import React,{useState,useEffect,useContext} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {Context} from '../context/Context';
import './sidebar.css';

const Sidebar=()=>{

    const PF="http://localhost:5000/images/";
    const {user}=useContext(Context);
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
           {user?(
             <>
            <span className="sidebarTitle">ABOUT ME</span>
           <img src={user?PF+user.profilePic:""} alt=""/>
           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat nam iusto ducimus obcaecati rerum velit quo voluptas ut non, facere atque quidem, dignissimos, possimus.</p>
           </>
         ):(<div></div>)}
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
