import React from 'react';
import classes from '../Myposts/Posts.module.css';
import Post from './Post/Post.jsx'; 
export default function Posts() {

    let posts = [
    {id: 1, message: 'What do you like to do?', likesCount: 10, dontLikeCount: 0}, 
    {id: 2, message: 'I like swimming!What about you?', likesCount: 70, dontLikeCount: 1},
    {id: 3, message: 'I hate swimming!What about you?', likesCount: 0, dontLikeCount: 1},
    {id: 4, message: 'I like swimming!What about you?', likesCount: 70, dontLikeCount: 1},
 ]

 let postsElements = posts.map(post => <Post message={post.message} likesCount={post.likesCount} dontLikeCount={post.dontLikeCount}/>)

    return (
        <div>
        <div className={classes.post}>
       My Post
       <div>
           <div><textarea></textarea></div>
           <button>Add Post</button>
           <button>Delete Post</button>
       
       {postsElements}
       <Post/> 
       </div>
     </div>
     </div>
    )
}
