import React,{useState,useEffect} from 'react';
import Header from '../../header/Header';
import Sidebar from '../../sidebar/Sidebar';
import './about.css';

const About=()=>{


  return (
    <>
    <Header/>
    <div className="about">
        <div className="aboutCompany">
         This Site is designed by Akashdeep Chandrakar
        </div>
    </div>
    </>
  );
};

export default About;
