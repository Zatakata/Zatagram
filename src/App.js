import React from 'react'
import './App.css'

const App = () => {
  return (
    <section className='app container'>
      <header className='header'>
        <a href='#' className='logo'>
          <img src='http://pngimg.com/uploads/bmw_logo/bmw_logo_PNG19705.png' />
        </a>
        <ul className='settings'>
          <li><img />+</li>
          <li><img />+</li>
        </ul>
      </header>

      <main className='main'>
        <div className='profile'>
          <div className='head'>
            <h2 className='title'>Профиль</h2>
            <div className='activity'>
              <div className='subscriptions'><span>Подписок: </span> 14</div>
              <div className='subscribers'><span>Подписанно: </span> 77</div>
            </div>
          </div>

          <div className='my_posts'>
            <div className='my_post'>
              <img src='https://static.tonkosti.ru/images/f/f6/%D0%9C%D0%B8%D0%BB%D1%84%D0%BE%D1%80%D0%B4-%D0%A1%D0%B0%D1%83%D0%BD%D0%B4%2C_%D0%9D%D0%BE%D0%B2%D0%B0%D1%8F_%D0%97%D0%B5%D0%BB%D0%B0%D0%BD%D0%B4%D0%B8%D1%8F.jpg' />
            </div>
            <div className='my_post'>
              <img src='https://static.tonkosti.ru/images/f/f6/%D0%9C%D0%B8%D0%BB%D1%84%D0%BE%D1%80%D0%B4-%D0%A1%D0%B0%D1%83%D0%BD%D0%B4%2C_%D0%9D%D0%BE%D0%B2%D0%B0%D1%8F_%D0%97%D0%B5%D0%BB%D0%B0%D0%BD%D0%B4%D0%B8%D1%8F.jpg' />
            </div>
            <div className='my_post'>
              <img src='https://static.tonkosti.ru/images/f/f6/%D0%9C%D0%B8%D0%BB%D1%84%D0%BE%D1%80%D0%B4-%D0%A1%D0%B0%D1%83%D0%BD%D0%B4%2C_%D0%9D%D0%BE%D0%B2%D0%B0%D1%8F_%D0%97%D0%B5%D0%BB%D0%B0%D0%BD%D0%B4%D0%B8%D1%8F.jpg' />
            </div>
            <div className='my_post'>
              <img src='https://static.tonkosti.ru/images/f/f6/%D0%9C%D0%B8%D0%BB%D1%84%D0%BE%D1%80%D0%B4-%D0%A1%D0%B0%D1%83%D0%BD%D0%B4%2C_%D0%9D%D0%BE%D0%B2%D0%B0%D1%8F_%D0%97%D0%B5%D0%BB%D0%B0%D0%BD%D0%B4%D0%B8%D1%8F.jpg' />
            </div>
            <div className='my_post'>
              <img src='https://static.tonkosti.ru/images/f/f6/%D0%9C%D0%B8%D0%BB%D1%84%D0%BE%D1%80%D0%B4-%D0%A1%D0%B0%D1%83%D0%BD%D0%B4%2C_%D0%9D%D0%BE%D0%B2%D0%B0%D1%8F_%D0%97%D0%B5%D0%BB%D0%B0%D0%BD%D0%B4%D0%B8%D1%8F.jpg' />
            </div>
          </div>
        </div>
      </main>

      <aside className='aside'>
        <div className='short_profile'>
          <div className='avatar'>
            <img />
          </div>
          <div>
            <span className='login'>@zatakata</span>
            <button className='btn'>Мой профиль</button>
          </div>
        </div>

        <div className='navigation'>
          <h2 className='title'>Навигация</h2>
          <ul className='menu'>
            <li className='item'>Пункт 1</li>
            <li className='item'>Пункт 2</li>
            <li className='item'>Пункт 3</li>
            <li className='item'>Пункт 4</li>
          </ul>
        </div>
      </aside>

    </section>
  )
}


export default App

