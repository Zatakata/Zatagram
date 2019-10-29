import React from 'react'
import Post from './Post/Post'
import s from './Posts.module.css'
import preloader from './../../../assets/preloader.svg'
import AddPost from "./AddPost/AddPost";


const Posts = (props) => {


    return (
        <>
            <div className={s.posts}>
                <AddPost animate={true}
                         modalAddPostActive={props.modalAddPostActive}
                         toggleModalAddPost={props.toggleModalAddPost}
                         postsInputText={props.postsInputText}
                         changePostText={props.changePostText}
                         addPost={props.addPost}
                />

                {
                    props.isFetching ? <div><img src={preloader}/></div> :
                        props.posts.map(post => <Post key={post._id} post={post} addLike={props.addLike}
                                                           removeLike={props.removeLike}/>)
                }
            </div>
        </>
    )
}

export default Posts;