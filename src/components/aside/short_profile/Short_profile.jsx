import React from 'react'
import Btn from './../../btn/Btn'
import s from './Short_profile.module.css'


const Short_profile = () => {
    return (
        <div className={s.profile}>
            <div className={s.avatar}>
                <img />
            </div>
            <div>
                <span className={s.login}>@zatakata</span>
                <Btn />
            </div>
        </div>
    )
}

export default Short_profile;