import React from 'react'
import s from './Header.module.css'
import logo from './../../logo.png'
import {NavLink} from "react-router-dom";
import Search from './Search/Search'


const Aside = () => {
    return (
        <header className={s.header}>
            <NavLink className={s.logo} to='/Feed'>
                <img src={logo}/>
            </NavLink>
            <Search/>
            <NavLink to='Settings' className={s.settings}>
                <img src='https://img.icons8.com/flat_round/64/000000/settings--v4.png'/>
            </NavLink>
        </header>
    )
}

export default Aside;