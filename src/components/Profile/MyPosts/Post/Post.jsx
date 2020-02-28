import React from 'react';
import s from './Post.module.css';


const Post = (props) => {

    //debugger
    //console.log(props.message)
    return (
        <div className={s.item}>
            <img src='https://cdn.dribbble.com/users/172091/screenshots/2948495/tatyana1.jpg' />
            {props.message}
             <div>
            <span> like </span> {props.likesCount}
            </div>
            
        </div>
        
    
    )
}



export default Post;