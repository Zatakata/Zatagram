import React from 'react'
import './App.css'
import Header from './components/header/Header'
import Main from './components/main/Main'
import Aside from './components/aside/Aside'

const App = () => {
  return (
    <section className='app container'>
      <Header />
      <Main />
      <Aside />

    </section>
  )
}


export default App

