import React from 'react'
import s from './Search.module.css'
import searchIcon from './../../../search.svg'

const Search = () => {
    return (
        <div className={s.search}>
            <input className={s.input} type="text" placeholder='Поиск'/>
            <button className={s.button} ><img src={searchIcon}/></button>
        </div>
    )
}

export default Search;