import React from 'react';
import s from './MyPost.module.css';
import Post from './Post/Post';

const MyPost = (props) => {
  
 let postsElements = 
 props.posts.map( p => <Post message={p.message} likesCount={p.likesCount}/>);

 let newPostElement = React.createRef();
 let addPost = () => {
     props.addPost();


     }
     let onPostChange =()=>{
        let text = newPostElement.current.value;
        props.updateNewPostText(text);

     }
    return (
        <div className={s.postsBlock}>
            <h3> My post </h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost} >Add post</button>
                </div>
            </div>
            <div className={s.posts}>
            <Post/> <postsElements/>
            <Post/>  
            <Post/>  
            </div>
            
        </div>
    )
}

export default MyPost;