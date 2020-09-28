import React from 'react';
import classes from '../Myposts/Posts.module.css';
import Post from './Post/Post.jsx'; 
export default function Posts() {

    let postData = [
    {id: 1, message: 'What do you like to do?', likesCount: 10, dontLikeCount: 0}, 
    {id: 2, message: 'I like swimming!What about you?', likesCount: 80, dontLikeCount: 1},
   
 ]

    return (
        <div>
        <div className={classes.post}>
       My Post
       <div>
           <div><textarea></textarea></div>
           <button>Add Post</button>
           <button>Delete Post</button>
       <Post message={postData[0].message} likesCount={postData[0].likesCount} dontLikeCount={postData[0].dontLikeCount}/>
       
       <Post message={postData[1].message} likesCount={postData[1].likesCount} dontLikeCount={postData[1].dontLikeCount}/>
       <Post/> 
       </div>
     </div>
     </div>
    )
}
