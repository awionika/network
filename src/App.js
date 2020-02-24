import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';

const App =(props)=> {
  return (
    <div className='app-wrapper' >
      <Header />
      <NavBar />
      <div className='app-wrapper-content'>
        <Dialogs />
      </div>
      {/*<Profile/>*/}
    </div>

  );
}

export default App;
