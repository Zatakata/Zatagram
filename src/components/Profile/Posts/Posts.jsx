import React from 'react'
import Post from './Post/Post'
import s from './Posts.module.css'


const Posts = (props) => {
    let inpElement = React.createRef()

    let postAdd = () => {
        let src = inpElement.current.value
        props.addPost(src)
        inpElement.current.value = ''
    }

    return (
        <div>
            <input ref={inpElement} className={s.inp} type="text" placeholder='URL картинки'/>
            <button onClick={postAdd}>Добавить</button>

            <div className={s.posts}>
                {props.posts.map(post => <Post src={post.src}/>)}
            </div>
        </div>

    )
}

export default Posts;