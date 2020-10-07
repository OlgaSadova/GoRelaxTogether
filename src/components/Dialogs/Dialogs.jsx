import React from 'react';
import  classes from './Dialogs.module.css';
 import { NavLink } from 'react-router-dom';
 import DialogItem from './DialogItem/DialogItem';
 import MessageItem from './Message/MessageItem';

// const MessageItem = (props)=>{
//     return  <div className={classes.message}> {props.message}</div>
   
// }
export default function Dialogs(props) {
    

    let dialogsElements = props.dialogs.map(dialog =>  <DialogItem name={dialog.name} id={dialog.id}/>);
   
   
   
                    
    let messageElements = props.messages.map(message =>  <MessageItem message={message.message} id={message.id}/>);  
   
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
