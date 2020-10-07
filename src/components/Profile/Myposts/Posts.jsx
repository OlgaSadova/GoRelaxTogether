import React from 'react';
import classes from '../Myposts/Posts.module.css';
import Post from './Post/Post.jsx'; 
export default function Posts(props) {

//    

 let postsElements = props.posts.map(post => <Post message={post.message} likesCount={post.likesCount} dontLikeCount={post.dontLikeCount}/>)

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
