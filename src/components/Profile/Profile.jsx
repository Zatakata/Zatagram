import React from 'react'
import Activity from './Activity/Activity'
import Posts from './Posts/Posts'
import s from './Profile.module.css'

const Profile = (props) => {
    return (
        <div className={s.profile}>
            <div className={s.header}>
                <h2 className={s.title}>Профиль</h2>
                <Activity subscriptions='17' subscribers='74'/>
            </div>
            <Posts posts={props.posts}
                   postsInputText={props.postsInputText}
                   addPost={props.addPost}
                   changePostText={props.changePostText}
                   addLike={props.addLike}
                   removeLike={props.removeLike}
                   setPosts={props.setPosts}
                   isFetching={props.isFetching}
                   toggleFetching={props.toggleFetching}
            />
        </div>
    )
}

export default Profile;