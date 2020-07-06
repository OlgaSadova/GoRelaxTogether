import React from 'react';
import classes from './Profile.module.css';
import Posts from './Myposts/Posts.jsx';
export default function Profile() {
    return (
        <div>
       
       <div className={classes.image}>
     <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTlPjg6k3D9gcbTZPNvgfD9mbX-a9Oa-8Q0Ew&usqp=CAU'/>
     </div>
     <div>
     <Posts/>
     </div>
     </div>
     
    )
}
