import React from 'react'
import './App.css'
import Header from './components/header/Header'
import Aside from './components/aside/Aside'
import Profile from "./components/profile/Profile";
import Feed from "./components/feed/Feed";
import {BrowserRouter, Route} from "react-router-dom";

const App = (props) => {
  return (
    <BrowserRouter>
        <section className='app container'>
            <Header />
            <div className='app-main'>
                <Route path='/Profile' render={ () => <Profile state={props.state.profile} /> } />
                <Route path='/PostsFeed' render={ () => <Feed state={props.state.feed} /> }  />
            </div>
            <Aside />
        </section>
    </BrowserRouter>
  )
}


export default App

