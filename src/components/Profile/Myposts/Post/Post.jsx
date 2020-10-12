import React from 'react'
import classes from '../Post/Post.module.css';
export default function Post(props) {

  
    return (
       
        <div className={classes.image}>
       <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSjJBekKMdzDiywHq0HKWbcyCI6m7n31nkG3A&usqp=CAU'/> 
     
    <div className={classes.post}>{props.message}</div>  
         <span>Like {props.likesCount}</span> <span>Don't like {props.dontLikeCount}</span>
     </div>
    )
}
