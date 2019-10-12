import React from 'react'
import s from './Subscription.module.css'
import Avatar from "../../Avatar/Avatar";


const Subscription = (props) => {
    return (
        <a href='#' className={s.subscription}>
            <Avatar src={props.avatar}/>
        </a>
    )
}

export default Subscription;