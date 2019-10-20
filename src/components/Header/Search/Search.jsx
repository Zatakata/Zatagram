import React from 'react'
import s from './Search.module.css'
import search from '../../../assets/search.svg'

const Search = () => {
    return (
        <div className={s.search}>
            <input className={s.input} type="text" placeholder='Поиск'/>
            <button className={s.btn}>
                <img src={search} alt=""/>
            </button>
        </div>
    )
}

export default Search;