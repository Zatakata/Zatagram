import React from 'react'
import s from './Header.module.css'
import  logo from './../../logo.png'


const Aside = () => {
    return (
        <header className={s.header}>
            <a href='#' className={s.logo}>
                <img src={logo} />
            </a>
            <ul className={s.settings}>
                <li><img />+</li>
                <li><img />+</li>
            </ul>
        </header>
    )
}

export default Aside;