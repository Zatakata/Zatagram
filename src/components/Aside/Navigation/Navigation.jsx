import React from 'react'
import s from './Navigation.module.css'
import {NavLink} from "react-router-dom";
import AsideTitle from "../Aside_title/Aside_title";


const Navigation = () => {
    return (
        <div className={s.navigation}>
            <AsideTitle title='Навигация'/>
            <ul className={s.menu}>
                <li className={s.item}><NavLink to='/Profile' activeClassName={s.active}>Мой профиль</NavLink></li>
                <li className={s.item}><NavLink to='/Feed' activeClassName={s.active}>Лента</NavLink></li>
            </ul>
        </div>
    )
}

export default Navigation;