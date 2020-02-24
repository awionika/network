import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Setting from './components/Setting/Setting';
import News from './components/News/News';
import { Route, BrowserRouter } from 'react-router-dom';

const App =(props)=> {
  return (
    <BrowserRouter>
    <div className='app-wrapper' >
      <Header />
      <NavBar />
      <div className='app-wrapper-content'>
      <Route path='/dialogs' component={Dialogs}/>
      <Route path='/profile' component={Profile}/>
      <Route path='/news' component={News}/>
      <Route path='/setting' component={Setting}/>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
