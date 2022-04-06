import React from 'react';
import './singlePost.css';

const SinglePost=()=>{
  return (
    <div className="singlePost">
       <div className="singlePostWrapper">
        <img src="https://i.pinimg.com/originals/1a/0d/f5/1a0df5e4f0e503884cb5a1b5fde8e1bc.jpg" alt="" className="singlePostImg"/>
       </div>
       <h1 className="singlePostTitle">Lorem ipsum dolor </h1>
       <div className="singlePostEdit">
          <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
          <i className="singlePostIcon fa-solid fa-trash-can"></i>
       </div>
       <div className="singlePostInfo">
          <span className="singlePostAuther">Author:<b>Akash</b></span>
          <span className="singlePostDate">1 hour ago</span>
       </div>
       <p className="singlePostDesc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum eos iusto fugit quisquam suscipit magnam dicta, nam architecto incidunt cumque, beatae at veritatis quia itaque, sint quas debitis totam omnis.
       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum eos iusto fugit quisquam suscipit magnam dicta, nam architecto incidunt cumque, beatae at veritatis quia itaque, sint quas debitis totam omnis.
       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum eos iusto fugit quisquam suscipit magnam dicta, nam architecto incidunt cumque, beatae at veritatis quia itaque, sint quas debitis totam omnis.
       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum eos iusto fugit quisquam suscipit magnam dicta, nam architecto incidunt cumque, beatae at veritatis quia itaque, sint quas debitis totam omnis.
       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum eos iusto fugit quisquam suscipit magnam dicta, nam architecto incidunt cumque, beatae at veritatis quia itaque, sint quas debitis totam omnis.
       </p>
    </div>
  );
};

export default SinglePost;
