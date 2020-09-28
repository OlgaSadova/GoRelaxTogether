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
    let messageData = [{id: 1, message: 'Hi'}, 
                       {id: 2, message: 'What do you like to do?'},
                       {id: 3, message: 'I love hiking!'},
                       {id: 4, message: 'Hi, Me too'},
                       {id: 5, message: 'I hate sport'}
                    ]
   
    return (
        <div className={classes.dialogs}>
         <div className={classes.dialogsItem}>
             <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
             <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
            
        </div>
         <div className={classes.message}>
             <div className={classes.messages}>
                <MessageItem message={messageData[0].message} id={messageData[0].id}/>
                <MessageItem message={messageData[1].message} id={messageData[1].id}/>
                
             </div>
         </div>
        </div>
    )
}
