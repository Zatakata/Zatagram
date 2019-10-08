import React from 'react'
import s from './Navigation.module.css'


const Navigation = () => {
    return (
        <div className={s.navigation}>
            <h2 className={s.title}>Навигация</h2>
            <ul className={s.menu}>
                <li className={s.item}>Пункт 1</li>
                <li className={s.item}>Пункт 1</li>
                <li className={s.item}>Пункт 1</li>
                <li className={s.item}>Пункт 1</li>
                <li className={s.item}>Пункт 1</li>
            </ul>
        </div>
    )
}

export default Navigation;