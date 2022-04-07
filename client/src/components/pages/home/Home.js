import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Header from '../../header/Header';
import Posts from '../../posts/Posts';
import Sidebar from '../../sidebar/Sidebar';
import server from '../../server/Server';
import './home.css';

const Home=()=>{

  const [posts,setPosts]=useState([]);

  useEffect(()=>{
    const fetchPosts=async ()=>{

      const response=await axios.get("/posts");
      setPosts(response.data);
    }

    fetchPosts();

  },[]);
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
