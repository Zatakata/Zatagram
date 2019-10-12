import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Aside from './components/Aside/Aside'
import Profile from "./components/Profile/Profile";
import Feed from "./components/Feed/Feed";
import {BrowserRouter, Route} from "react-router-dom";

const App = (props) => {
    return (
        <section className='app container'>
            <Header/>
            <div className='app-main'>
                <Route path='/Profile' render={() => <Profile state={props.state.profile} addPost={props.addPost} />}/>
                <Route path='/Feed' render={() => <Feed state={props.state.feed}/>}/>
            </div>
            <Aside state={props.state.users}/>
        </section>
    )
}


export default App

