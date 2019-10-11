import React from 'react'
import s from './Avatar.module.css'
import {NavLink} from "react-router-dom";


const Avatar = (props) => {
    return (
        <div className={s.avatar}>
            <img src={props.src} />
        </div>
    )
}

export default Avatar;