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
                <Route path='/Profile' render={() => <Profile store={props.store} />}/>
                <Route path='/Feed' render={() => <Feed store={props.store}/>}/>
            </div>
            <Aside store={props.store}/>
        </section>
    )
}


export default App

