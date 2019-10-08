import React from 'react'
import My_post from './my_post/My_post'
import s from './My_posts.module.css'


const My_posts = () => {
    return (
        <div className={s.posts}>
            <My_post />
            <My_post />
            <My_post />
            <My_post />
        </div>
    )
}

export default My_posts;