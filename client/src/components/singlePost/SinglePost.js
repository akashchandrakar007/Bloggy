import React,{useEffect,useState} from 'react';
import axios from 'axios';
import {useLocation} from 'react-router';
import {Link} from 'react-router-dom';
import './singlePost.css';

const SinglePost=()=>{

  const location=useLocation();
  const path=location.pathname.split('/')[2];
  const [post,setPost]=useState({});

  useEffect(()=>{
    const getPost=async ()=>{
       const response=await axios.get('/posts/'+path);
       setPost(response.data);
  };
  getPost();

  },[path]);

  return (
    <div className="singlePost">
       <div className="singlePostWrapper">
        {post.photo && <img src={post.photo} alt="" className="singlePostImg"/>}
       </div>
       <h1 className="singlePostTitle">{post.title} </h1>
       <div className="singlePostEdit">
          <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
          <i className="singlePostIcon fa-solid fa-trash-can"></i>
       </div>
       <div className="singlePostInfo">
          <span className="singlePostAuther">
            Author:<b>
            <Link to={`/?user=${post.username}`} className="link">
            {post.username}
            </Link>
            </b>
          </span>
          <span className="singlePostDate">{new Date(post.createdAt).toDateString()}</span>
       </div>
       <p className="singlePostDesc">
        {post.desc}
       </p>
    </div>
  );
};

export default SinglePost;
