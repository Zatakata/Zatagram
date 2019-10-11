import React from 'react'
import Btn from './../../btn/Btn'
import s from './Short_profile.module.css'
import {NavLink} from "react-router-dom";
import Avatar from "../avatar/Avatar";


const Short_profile = () => {
    return (
        <div className={s.profile}>
            <Avatar src='https://steamuserimages-a.akamaihd.net/ugc/854973111417266411/908C128B67612E962D70691FF6DF7767B4572B9C/' />
            <div>
                <span className={s.login}>@zatakata</span>
                <NavLink to='/Profile' className={s.btn}>Мой профиль</NavLink>
            </div>
        </div>
    )
}

export default Short_profile;