import React from 'react'
import s from './Activity.module.css'


const Activity = (props) => {
    return (
        <div className={s.activity}>
            <div className={s.subscriptions}>Подписок: <span> {props.subscriptions}</span></div>
            <div className={s.subscribers}>Подписанно: <span>{props.subscribers}</span></div>
        </div>
    )
}

export default Activity;