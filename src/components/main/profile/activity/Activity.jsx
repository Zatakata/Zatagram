import React from 'react'
import s from './Activity.module.css'


const Activity = () => {
    return (
        <div className={s.activity}>
            <div className={s.subscriptions}><span>Подписок: </span> 14</div>
            <div className={s.subscribers}><span>Подписанно: </span> 77</div>
        </div>
    )
}

export default Activity;