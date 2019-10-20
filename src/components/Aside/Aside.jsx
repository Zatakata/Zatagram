import React from 'react'
import ShortProfile from './Short_profile/Short_profile'
import Navigation from './Navigation/Navigation'
import s from './Aside.module.css'
import Subscriptions from "./Subscriptions/Subscriptions";

const Aside = (props) => {
    return (
        <aside className={s.aside}>
            <ShortProfile/>
            <Navigation/>
            <Subscriptions users={props.users}/>
        </aside>
    )
}

export default Aside;
