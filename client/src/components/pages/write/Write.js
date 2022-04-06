import React from 'react';
import './write.css';

const Write=()=>{
   return (
     <div className="write">
         <img src="https://i.pinimg.com/originals/1a/0d/f5/1a0df5e4f0e503884cb5a1b5fde8e1bc.jpg" alt="" className="writeImg"/>
         <form className="writeForm">
          <div className="writeFormGroup">
            <label htmlFor="fileInput">
             <i class="writeIcon fa-solid fa-plus"></i>
            </label>
            <input type="file" id="fileInput" style={{display:"none"}}/>
            <input type="text" placeholder="Title" className="writeInput" autoFocus={true}/>
          </div>
          <div className="writeFormGroup">
             <textarea  placeholder="Tell your story" type="text" className="writeInput writeText"></textarea>
          </div>
           <button className="writeSubmit">Publish</button>
         </form>
     </div>
   );
};

export default Write;
