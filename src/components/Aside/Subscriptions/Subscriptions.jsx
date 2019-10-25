import React from 'react'
import s from './Subscriptions.module.css'
import AsideTitle from "../Aside_title/Aside_title";
import Subscription from "./Subscription/Subscription";


const Subscriptions = (props) => {
    return (
        <div className={s.subscriptions}>
            <AsideTitle title='Подписки'/>
            <div className={s.list}>
                {props.users.map((user, id) => <Subscription key={id} avatar={user.avatar}/>)}
            </div>
        </div>
    )
}

export default Subscriptions;