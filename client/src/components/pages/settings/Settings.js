import React,{useContext} from 'react';
import Sidebar from "../../sidebar/Sidebar";
import {Context} from '../../context/Context';
import './settings.css';

const Setting=()=>{
   const {user}=useContext(Context);
   return (
     <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
         <span className="settingsUpdateTitle">Update Your account</span>
         <span className="settingsDeleteTitle">Delete account</span>
        </div>
        <form className="settingsForm">
           <label>Profile picture</label>
              <div className="settingsPP">
                 <img className="settingPPImg" src={user.profilePic} alt=""/>
                 <label htmlFor="fileInput">
                   <i className="settingsPPIcon fa-solid fa-user"></i>
                 </label>
                <input type="file" id="fileInput" style={{display:"none"}}/>
              </div>
            <label>UserName</label>
            <input type="text" placeholder="Safak"/>
            <label>Email</label>
            <input type="email" placeholder="safak@gmail.com"/>
            <label>Password</label>
            <input type="password" />
            <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <Sidebar/>
     </div>
   );
};

export default Setting;
