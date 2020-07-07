import React from 'react';
import  classes from './Dialogs.module.css';

export default function Dialogs() {
    return (
        <div className={classes.dialogs}>
         <div className={classes.dialogsItem}>
             <div className={classes.dialog + ' ' + classes.active}>
                 Olga
             </div>
             <div className={classes.dialog}>
                 Sergiy
             </div>
             <div className={classes.dialog}>
                 Mira
             </div>
             <div className={classes.dialog}>
                 Milana
             </div>
        </div>
         <div className={classes.message}>
             <div className={classes.messages}>
                 <div className={classes.message}> Hello!!!</div>
                 <div className={classes.message}> What do you like to do?</div>
                 <div className={classes.message}>I love hiking!</div>
             </div>
         </div>
        </div>
    )
}
