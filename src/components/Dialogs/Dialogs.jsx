import React from 'react';
import  classes from './Dialogs.module.css';
 import { NavLink } from 'react-router-dom';
 import DialogItem from './DialogItem/DialogItem';
 import MessageItem from './Message/MessageItem';

// const MessageItem = (props)=>{
//     return  <div className={classes.message}> {props.message}</div>
   
// }
export default function Dialogs() {
    let dialogs = [{id: 1, name: 'Olga'}, 
                       {id: 2, name: 'Sergiy'},
                       {id: 3, name: 'Mira'},
                       {id: 4, name: 'Milana'},
                       {id: 5, name: 'Lina'}
                    ]
    let messages = [{id: 1, message: 'Hi'}, 
                    {id: 2, message: 'What do you like to do?'},
                    {id: 3, message: 'I love hiking!'},
                    {id: 4, message: 'Hi, Me too'},
                    {id: 5, message: 'I hate sport'}]

    let dialogsElements = dialogs.map(dialog =>  <DialogItem name={dialog.name} id={dialog.id}/>);
   
   
   
                    
    let messageElements = messages.map(message =>  <MessageItem message={message.message} id={message.id}/>);  
   
    return (
        <div className={classes.dialogs}>
         <div className={classes.dialogsItem}>
            
            {dialogsElements}
            
        </div>
         <div className={classes.message}>
             <div className={classes.messages}>
               
                {messageElements}
                
             </div>
         </div>
        </div>
    )
}
