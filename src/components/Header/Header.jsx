import React from 'react'
import s from './Header.module.css'
import logo from '../../assets/logo.png'
import settings from '../../assets/settings.svg'
import Search from "./Search/Search";


const Aside = () => {
    return (
        <header className={s.header}>
            <a href='#' className={s.logo}>
                <img src={logo}/>
            </a>
            <Search/>
            <button className={s.settings}>
                <img src={settings}/>
            </button>
        </header>
    )
}

export default Aside;