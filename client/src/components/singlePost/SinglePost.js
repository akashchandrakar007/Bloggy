import React,{useEffect,useState,useContext} from 'react';
import axios from 'axios';
import {useLocation} from 'react-router';
import {Link} from 'react-router-dom';
import './singlePost.css';
import {Context} from '../context/Context';

const SinglePost=()=>{

  const location=useLocation();
  const path=location.pathname.split('/')[2];
  const [post,setPost]=useState({});
  const PF="http://localhost:5000/images/";
  const {user}=useContext(Context);
  const [title,setTitle]=useState('');
  const [desc,setDesc]=useState('');
  const [updateMode,setUpdateMode]=useState(false);

  useEffect(()=>{
    const getPost=async ()=>{
       const response=await axios.get('/posts/'+path);
       setPost(response.data);
       const head=response.data.title;
       const para=response.data.desc;
       setTitle(head);
       setDesc(para);

  };
  getPost();

  },[path]);
   const handleDelete=async()=>{

        try{
           await axios.delete("/posts/"+path,{data:{username:user.username}});
           window.location.replace("/");
        }catch(err){

        }
   };

  const handleUpdate=async ()=>{

       try{
          await axios.put(`/posts/${post._id}`,{

            username:user.username,
            title,
            desc
          });
          setUpdateMode(false);
        }catch(err){

      }
  }

  return (
    <div className="singlePost">
       <div className="singlePostWrapper">
        {post.photo && (<img src={PF+post.photo} alt="" className="singlePostImg"/>)}

       { updateMode ? <input type="text" value={title} className="singlePostTitleInput" autoFocus onChange={(e)=>setTitle(e.target.value)}/> :(


       <h1 className="singlePostTitle">{post.title}
       { post.username===user?.username &&
       (<div className="singlePostEdit">
          <i className="singlePostIcon fa-solid fa-pen-to-square" onClick={()=>setUpdateMode(true)}></i>
          <i className="singlePostIcon fa-solid fa-trash-can" onClick={handleDelete}></i>
       </div>)

       }
       </h1>
        )}
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
       { updateMode ? <textarea className="singlePostDescInput" value={desc} onChange={(e)=>setDesc(e.target.value)}/> :(
         <p className="singlePostDesc">
          {post.desc}
         </p>
       )}
       {updateMode && (<button className="singlePostButton" onClick={handleUpdate}>Update</button>)}
      </div>
    </div>
  );
};

export default SinglePost;
