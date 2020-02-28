
import React from 'react';
import s from './Friends.module.css';
import Post from '../Profile/MyPosts/Post/Post';
 

const Friends = (props) => {

    return (
        <div>
          <h1> Friends</h1>  
          <Post/> 
          <Post/>
          <Post/>
        </div>
    )
}

export default Friends;