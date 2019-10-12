import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Aside from './components/Aside/Aside'
import Profile from "./components/Profile/Profile";
import Feed from "./components/Feed/Feed";
import {BrowserRouter, Route} from "react-router-dom";

const App = (props) => {
  return (
    <BrowserRouter>
        <section className='app container'>
            <Header />
            <div className='app-main'>
                <Route path='/Profile' render={ () => <Profile state={props.state.profile} /> } />
                <Route path='/Feed' render={ () => <Feed state={props.state.feed} /> }  />
            </div>
            <Aside state={props.state.users} />
        </section>
    </BrowserRouter>
  )
}


export default App

