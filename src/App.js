import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';


// video 18 ReactJS vremja 15.41

function App() {
  return (
    <div className='app-wrapper' >
      <Header/>
      <NavBar/>
      <Dialogs/>
      {/*<Profile/>*/}
      
    </div>

  );
}

export default App;
