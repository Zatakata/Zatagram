import React from 'react'
import s from './Navigation.module.css'
import {NavLink} from "react-router-dom";
import Feed from "../../feed/Feed";


const Navigation = () => {
    return (
        <div className={s.navigation}>
            <h2 className={s.title}>Навигация</h2>
            <ul className={s.menu}>
                <li className={s.item}><NavLink to='/Profile' activeClassName={s.active}>Мой профиль</NavLink></li>
                <li className={s.item}><NavLink to='/PostsFeed' activeClassName={s.active}>Лента</NavLink></li>
            </ul>
        </div>
    )
}

export default Navigation;