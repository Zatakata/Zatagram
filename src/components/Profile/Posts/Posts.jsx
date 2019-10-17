import React from 'react'
import Post from './Post/Post'
import s from './Posts.module.css'
import {addPostAction, changePostInputAction} from "../../../redux/profileReducer";


const Posts = (props) => {
    let posts = props.state.profile.posts

    let inpElement = React.createRef()

    let postAdd = () => {
        let src = inpElement.current.value
        props.dispatch(addPostAction(src))
    }

    let postInputTextChange = () => {
        let text = inpElement.current.value
        props.dispatch(changePostInputAction(text))
    }

    return (
        <div>
            <input ref={inpElement} onChange={postInputTextChange} value={props.state.profile.postsInputText}
                   className={s.inp} type="text" placeholder='URL картинки'/>
            <button onClick={postAdd}>Добавить</button>

            <div className={s.posts}>
                {posts.map(post => <Post src={post.src}/>)}
            </div>
        </div>

    )
}

export default Posts;