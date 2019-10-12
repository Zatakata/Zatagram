import React from 'react'
import s from './Post.module.css'


const Post = (props) => {
    return (
        <div className={s.post}>
            <img src={props.src}/>
        </div>
    )
}

export default Post;