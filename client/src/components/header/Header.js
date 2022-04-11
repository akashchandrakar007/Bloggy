import React from 'react';
import './header.css';

const Header=()=>{
  return (
      <div className="header">
         <div className="headerTitle">
           <span className="headerTitleLg">Bloggy</span>
         </div>
         <img className="headerImg" src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80" alt=""/>
      </div>
  );
};

export default Header;
