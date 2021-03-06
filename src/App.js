import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Setting from './components/Setting/Setting';
import News from './components/News/News';
import Friends from './components/Friends/Friends';
import { Route, BrowserRouter } from 'react-router-dom';



const App = (props) => {

  return (
    
      <div className='app-wrapper'>
        <Header />
        <NavBar />
        <div className='app-wrapper-content'>
          <Route path='/dialogs' 
                  render={() => <Dialogs state={props.state.dialogsPage}/> } />
          <Route path='/profile' 
                 render={() => <Profile 
                 profilePage={props.state.profilePage} 
                 addPost={props.addPost}
                 updateNewPostText={props.updateNewPostText}
                 /> }/>

          <Route path='/news' component={News} />
          <Route path='/setting' component={Setting} />

          <Route path='/fiends' component={Friends} />


        </div>
      </div>
      
  );
}

export default App;
