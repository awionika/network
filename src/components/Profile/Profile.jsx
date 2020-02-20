import React from 'react';
import s from './Profile.module.css';
import MyPost from './MyPosts/MyPost';

const Profile = () => {
    return (
    <div className={s.content}>
        <div>
            <img src='https://i.pinimg.com/originals/3c/52/28/3c52281d3b74f3b8e4f616b8be0695dc.jpg' />
        </div>
        <div className = {s.posts}>
        <div className ={s.item}> ava + description</div>
        </div>
        <MyPost/>
    </div>
    )
      
}

export default Profile;