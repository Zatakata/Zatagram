import React from 'react'
import './App.css'
import Header from './components/header/Header'
import Aside from './components/aside/Aside'
import Profile from "./components/profile/Profile";
import PostsFeed from "./components/posts_feed/PostsFeed";
import {BrowserRouter, Route} from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
        <section className='app container'>
            <Header />
            <div className='app-main'>
                <Route path='/Profile' component={Profile} />
                <Route path='/PostsFeed' component={PostsFeed} />
            </div>
            <Aside />
        </section>
    </BrowserRouter>
  )
}


export default App

