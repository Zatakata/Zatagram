import React from 'react'
import Short_profile from './short_profile/Short_profile'
import Navigation from './navigation/Navigation'
import s from './Aside.module.css'

const Aside = () => {
    return (
        <aside className={s.aside}>
            <Short_profile />
            <Navigation />
        </aside>
    )
}

export default Aside;