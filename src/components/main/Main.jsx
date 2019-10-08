import React from 'react'
import Profile from './profile/Profile'
import s from './Main.module.css'


const Main = () => {
    return (
        <main className={s.main}>
           <Profile />
        </main>
    )
}

export default Main;