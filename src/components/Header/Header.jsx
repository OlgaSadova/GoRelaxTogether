import React from 'react';
 import classes from './Header.module.css';


export default function Header() {
    return (
        <header className={classes.header}>
            <div className={classes.name}>Looking For Same Activities!!!</div>
        <img src='https://images.unsplash.com/photo-1540957904852-c2184978df5e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'/>
      </header>
    )
}
