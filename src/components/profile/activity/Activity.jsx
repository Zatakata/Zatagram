import React from 'react'
import s from './Activity.module.css'


const Activity = (props) => {
    return (
        <div className={s.activity}>
            <div className={s.subscriptions}><span>Подписок: </span> {props.subscriptions}</div>
            <div className={s.subscribers}><span>Подписанно: </span> {props.subscribers}</div>
        </div>
    )
}

export default Activity;