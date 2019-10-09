import React from 'react'
import s from './My_post.module.css'


const My_post = (props) => {
    return (
        <div className={s.post}>
            <img src={props.src} />
        </div>
    )
}

export default My_post;