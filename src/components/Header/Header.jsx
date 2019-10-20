import React from 'react'
import s from './Header.module.css'
import logo from '../../assets/logo.png'
import settings from '../../assets/settings.svg'
import Search from "./Search/Search";
import {NavLink} from "react-router-dom";

const Aside = () => {
    return (
        <header className={s.header}>
            <NavLink className={s.logo} to='/Feed'>
                <img src={logo}/>
            </NavLink>
            <Search/>
            <button className={s.settings}>
                <img src={settings}/>
            </button>
        </header>
    )
}

export default Aside;