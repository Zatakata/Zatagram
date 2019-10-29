import React from 'react'
import s from './AddPost.module.css'
import addIcon from './../../../../assets/add_post.svg'
import Posts from "../Posts";


const AddPost = (props) => {
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
        <>
            <button className={s.addPost} onClick={() => {
                props.toggleModalAddPost(true)
            }}>
                <img src={addIcon} alt=""/>
            </button>
            {props.modalAddPostActive &&
            <div className={s.addPostModal}>
                <div className={`${s.addPostModalBody} ${props.animate && s.addPostModalBodyAnimate}`}>
                    <button className={s.addPostModalClose} onClick={() => {
                        props.toggleModalAddPost(false)
                    }}>&#215;</button>

                    <input ref={inpElement} onChange={onChangePostText} value={props.postsInputText}
                           className={s.inp} type="text" placeholder='URL картинки'/>
                    <button onClick={onAddPost}>Добавить</button>
                </div>
            </div>
            }
        </>
    )
}

export default AddPost;