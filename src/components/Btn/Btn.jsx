import React from 'react'
import s from './Btn.module.css'


const Btn = (props) => {
    return (
        <button className={s.btn}>{props.text}</button>
    )
}

export default Btn;