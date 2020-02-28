import React from 'react';
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