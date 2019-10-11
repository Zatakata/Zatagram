import React from 'react'
import s from './Header.module.css'
import  logo from './../../logo.png'


const Aside = () => {
    return (
        <header className={s.header}>
            <a href='#' className={s.logo}>
                <img src={logo} />
            </a>
            <button className={s.settings}>
                <img src='https://img.icons8.com/flat_round/64/000000/settings--v4.png' />
            </button>
        </header>
    )
}

export default Aside;