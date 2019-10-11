import React from 'react'
import MyPost from './my_post/My_post'
import s from './My_posts.module.css'





const MyPosts = (props) => {
    return (
        <div className={s.posts}>
            { props.posts.map(post => <MyPost src={post.src} />) }
        </div>
    )
}

export default MyPosts;