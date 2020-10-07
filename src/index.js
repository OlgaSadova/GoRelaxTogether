import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
  {id: 1, message: 'What do you like to do?', likesCount: 10, dontLikeCount: 0}, 
  {id: 2, message: 'I like swimming!What about you?', likesCount: 70, dontLikeCount: 1},
  {id: 3, message: 'I hate swimming!What about you?', likesCount: 0, dontLikeCount: 1},
  {id: 4, message: 'I like swimming!What about you?', likesCount: 70, dontLikeCount: 1},
]
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

ReactDOM.render(
  <React.StrictMode>
    <App  posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
