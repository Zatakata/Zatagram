import React from 'react'
import  s from  './Post.module.css'

const Post = (props) => {
    return (
        <article className={s.post}>
            <header className={s.header}>
                <h4 className={s.author}>{props.post.author}</h4>
                <date className={s.date}>{props.post.date}</date>
            </header>
            <div className={s.wrap}>
                <img className={s.img} src={props.post.src} />
                <p className={s.desc}>{props.post.desc}</p>
            </div>
            <footer className={s.footer}>
                <div className={s.likes}>Likes: {props.post.likes}</div>
                <div className={s.comments}>Comments: {props.post.comments}</div>
                <div className={s.views}>Views: {props.post.views}</div>
            </footer>
        </article>
    )
}

export default Post;