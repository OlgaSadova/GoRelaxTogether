import React from 'react';
import  classes from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';
 
const DialogItem = (props) =>{
    return  <div className={classes.dialog + ' ' + classes.active}>
    <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
 </div>  
}
const MessageItem = (props)=>{
    return  <div className={classes.message}> {props.message}</div>
   
}
export default function Dialogs() {
    let dialogsData = [{id: 1, name: 'Olga'}, 
                       {id: 2, name: 'Sergiy'},
                       {id: 3, name: 'Mira'},
                       {id: 4, name: 'Milana'},
                       {id: 5, name: 'Lina'}
                    ]
   
    return (
        <div className={classes.dialogs}>
         <div className={classes.dialogsItem}>
             <DialogItem name='Olga' id='1'/>
             <DialogItem name='Sergiy' id='2'/>
             <DialogItem name='Mira' id='3'/>
             <DialogItem name='Milana' id='4'/>
             <DialogItem name='Lina' id='5'/>
             
        </div>
         <div className={classes.message}>
             <div className={classes.messages}>
                <MessageItem message='Hi'/>
                <MessageItem message='What do you like to do?'/>
                <MessageItem message='I love hiking!'/>
                <MessageItem message='Hi, Me too'/>
                <MessageItem message='I hate sport'/>
                
             </div>
         </div>
        </div>
    )
}
