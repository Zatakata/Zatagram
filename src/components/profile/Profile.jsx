import React from 'react'
import Activity from './activity/Activity'
import MyPosts from './my_posts/My_posts'
import s from './Profile.module.css'


const Profile = (props) => {
    return (
        <div className={s.profile}>
            <div className={s.header}>
                <h2 className={s.title}>Профиль</h2>
                <Activity subscriptions='17' subscribers='74' />
            </div>
            <MyPosts posts={props.state.posts} />
        </div>
    )
}

export default Profile;