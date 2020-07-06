import React from 'react';
import classes from '../Myposts/Posts.module.css';
import Post from './Post/Post.jsx'; 
export default function Posts() {
    return (
        <div>
        <div className={classes.post}>
       My Post
       <div>
           <div><textarea></textarea></div>
           <button>Add Post</button>
           <button>Delete Post</button>
       <Post message='What do you like to do?' likesCount='10' dontLikeCount='0'/>
       
       <Post message='I like swimming!What about you?' likesCount='30' dontLikeCount='1'/>
       <Post/> 
       </div>
     </div>
     </div>
    )
}
