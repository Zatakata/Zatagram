import React from 'react'
import s from './Post.module.css'
import like from '../../../../assets/like.svg'
import unlike from '../../../../assets/unlike.svg'

const Post = (props) => {

    let onAddLike = () => {
        props.addLike(props.post.id)
    }

    let onRemoveLike = () => {
        props.removeLike(props.post.id)
    }

    return (
        <div className={s.post}>
            <img src={props.post.src} alt={props.post.name}/>
            <div className={s.actions}>
                {
                    props.post.isLike ?
                    <button onClick={ onRemoveLike } className={s.like}><img src={unlike}/></button> :
                    <button onClick={ onAddLike } className={`${s.like}`}><img src={like}/></button>
                }
            </div>
        </div>
    )
}

export default Post;