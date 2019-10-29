import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import {Route} from "react-router-dom";
import FeedContainer from "./components/Feed/FeedContainer";
import AsideContainer from "./components/Aside/AsideContainer";
import Settings from "./components/Settings/Settings";
import Profile from "./components/Profile/Profile";


const App = (props) => {
    return (
        <section className='app container'>
            <Header/>
            <div className='app-main'>
                <Route path='/Profile' render={() => <Profile store={props.store}/>}/>
                <Route path='/Feed' render={() => <FeedContainer store={props.store}/>}/>
                <Route path='/Settings' render={() => <Settings store={props.store}/>}/>
            </div>
            <AsideContainer store={props.store}/>
        </section>
    )
}


export default App

