import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Profile from './components/Profile/Profile.jsx';
import Dialogs from './components/Dialogs/Dialogs.jsx';
import { Route, BrowserRouter } from 'react-router-dom';
import News from './components/News/News.jsx';
import Music from './components/Music/Music.jsx';
import Settings from './components/Settings/Settings.jsx';

function App(props) {
  
  return (
    <BrowserRouter>
    <div className='app-wrapper'>
    <Header/>
    <Navbar/>
    <div className='app-wrapper-content'> 
   
    <Route path='/profile' render={()=><Profile state={props.state.profilePage}/>}/>
    <Route path='/dialogs' render={()=><Dialogs state={props.state.dialogsPage} messages={props.state.dialogsPage.messages} />}/>
    <Route path='/news' render={()=><News/>}/>
    <Route path='/music' render={()=><Music/>}/>
    <Route path='/settings' render={()=><Settings/>}/>
    </div>
     </div>
     </BrowserRouter>
  );
}

export default App;
