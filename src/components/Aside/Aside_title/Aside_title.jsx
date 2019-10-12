import React from 'react'
import s from './Aside_title.module.css'


const AsideTitle = (props) => {
    return (
        <h2 className={s.title}>{props.title}</h2>
    )
}

export default AsideTitle;