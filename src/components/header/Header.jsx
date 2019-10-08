import React from 'react'
import s from './Header.module.css'


const Aside = () => {
    return (
        <header className={s.header}>
            <a href='#' className={s.logo}>
                <img src='http://pngimg.com/uploads/bmw_logo/bmw_logo_PNG19705.png' />
            </a>
            <ul className={s.settings}>
                <li><img />+</li>
                <li><img />+</li>
            </ul>
        </header>
    )
}

export default Aside;