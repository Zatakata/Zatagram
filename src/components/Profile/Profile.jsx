import React from 'react'
import Activity from './Activity/Activity'
import s from './Profile.module.css'
import PostsContainer from "./Posts/PostsContainer";

const Profile = (props) => {
    return (
        <div className={s.profile}>
            <div className={s.header}>
                <h2 className={s.title}>Профиль</h2>
                <Activity subscriptions='17' subscribers='74'/>
            </div>
            <PostsContainer/>
        </div>
    )
}


export default Profile;