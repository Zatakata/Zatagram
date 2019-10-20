import React from 'react'
import Post from './Post/Post'
import s from './Posts.module.css'


const Posts = (props) => {
    let inpElement = React.createRef()

    let onAddPost = () => {
        let src = inpElement.current.value
        props.addPost(src)
    }

    let onChangePostText = () => {
        let text = inpElement.current.value
        props.changePostText(text)
    }

    return (
        <div>
            <input ref={inpElement} onChange={onChangePostText} value={props.postsInputText}
                   className={s.inp} type="text" placeholder='URL картинки'/>
            <button onClick={onAddPost}>Добавить</button>

            <div className={s.posts}>
                {props.posts.map(post => <Post src={post.src}/>)}
            </div>
        </div>
    )
}

export default Posts;