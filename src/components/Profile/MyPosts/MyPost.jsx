import React from 'react';
import s from './MyPost.module.css';
import Post from './Post/Post';

const MyPost = () => {

    //debugger;

    return (
        <div className={s.postBlock}>
            My post
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                  <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post message='Hi, how are you?' likesCount='0' />
                <Post message="It's my first post" likesCount='23' />
                <Post message="It's my post" />
            </div>

        </div>

    )
}

export default MyPost;