import React from 'react';
import './post.css';

const Post=()=>{
   return (
     <div className="post">
       <img src="https://i.pinimg.com/originals/1a/0d/f5/1a0df5e4f0e503884cb5a1b5fde8e1bc.jpg" alt="" className="postImg"/>
       <div className="postInfo">
          <div className="postCats">
             <span className="postCat">Music</span>
             <span className="postCat">Life</span>
          </div>
          <span className="postTitle">
          Lorem ipsum dolor sit amet
          </span>
          <hr/>
          <span className="postDate">1 hour ago</span>
       </div>
       <p className="postDesc">
       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi laudantium, dolorem praesentium, ducimus excepturi, quis nostrum iusto deleniti pariatur ipsam explicabo! Illum voluptates explicabo praesentium accusantium cumque suscipit adipisci magnam!
       </p>
     </div>
   );
};


export default Post;
