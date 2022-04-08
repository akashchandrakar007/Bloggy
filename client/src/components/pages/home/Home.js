import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {useLocation} from 'react-router';
import Header from '../../header/Header';
import Posts from '../../posts/Posts';
import Sidebar from '../../sidebar/Sidebar';
import server from '../../server/Server';
import './home.css';

const Home=()=>{

  const [posts,setPosts]=useState([]);
  const {search}=useLocation();

  useEffect(()=>{
    const fetchPosts=async ()=>{

      const response=await axios.get("/posts/"+search);
      setPosts(response.data);
    }

    fetchPosts();

  },[search]);
  return (
    <>
    <Header/>
    <div className="home">
       <Posts posts={posts}/>
       <Sidebar/>
    </div>
    </>
  );
};

export default Home;
