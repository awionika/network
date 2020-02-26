import React from 'react';
import s from './Profile.module.css';
import MyPost from './MyPosts/MyPost';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
//debugger
    return (
    <div>
       <ProfileInfo/>
        <MyPost posts={props.state.posts}/>
    </div>
    )
      
}

export default Profile;