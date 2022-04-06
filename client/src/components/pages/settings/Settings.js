import React from 'react';
import Sidebar from "../../sidebar/Sidebar";
import './settings.css';

const Setting=()=>{
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
                 <img classname="settingPPImg" src="https://i.pinimg.com/originals/1a/0d/f5/1a0df5e4f0e503884cb5a1b5fde8e1bc.jpg" alt=""/>
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
