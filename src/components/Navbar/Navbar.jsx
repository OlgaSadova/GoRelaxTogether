import React from 'react'
import classes from './Navbar.module.css';

export default function Navbar() {
    return (
        <nav className={classes.nav}>
       <div className={`${classes.profile} ${classes.active}`}>
         <a href='/profile'>Profile</a>
        </div>
      
        <div className={classes.message}><a href='/dialogs'>Messages</a></div>
        <div className={classes.item}><a href='/news'>News</a></div>
        <div className={classes.item}><a href='music'>Music</a></div>
        <div className={classes.item}><a href='settings'>Settings</a></div>
      </nav>
    )
}
