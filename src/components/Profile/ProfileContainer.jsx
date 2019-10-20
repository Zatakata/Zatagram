import React from 'react'
import {addPostAction, changePostInputAction} from "../../redux/profileReducer";
import Profile from "./Profile";


const ProfileContainer = (props) => {
    let posts = props.store.getState().profile.posts
    let postsInputText = props.store.getState().profile.postsInputText
    let dispatch = props.store.dispatch.bind(props.store)

    let addPost = (src) => {
        dispatch(addPostAction(src))
    }

    let changePostText = (text) => {
        dispatch(changePostInputAction(text))
    }

    return (
        <Profile posts={posts} postsInputText={postsInputText} addPost={addPost} changePostText={changePostText}/>
    )
}

export default ProfileContainer;