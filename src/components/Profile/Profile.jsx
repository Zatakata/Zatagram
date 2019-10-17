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
            <Posts state={props.state} dispatch={props.dispatch} />
        </div>
    )
}

export default Profile;