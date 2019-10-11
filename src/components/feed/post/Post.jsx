import React from 'react'
import  s from  './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.post}>
            <h4 className={s.author}>{props.author}</h4>
            <img className={s.img} src={props.src} />
        </div>
    )
}

export default Post;