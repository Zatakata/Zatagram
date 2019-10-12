import React from 'react'
import Post from './Post/Post'
import s from './Posts.module.css'


const Posts = (props) => {
    return (
        <div className={s.posts}>
            {props.posts.map(post => <Post src={post.src}/>)}
        </div>
    )
}

export default Posts;