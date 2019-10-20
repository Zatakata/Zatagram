import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import {Route} from "react-router-dom";
import FeedContainer from "./components/Feed/FeedContainer";
import AsideContainer from "./components/Aside/AsideContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";


const App = (props) => {
    return (
        <section className='app container'>
            <Header/>
            <div className='app-main'>
                <Route path='/Profile' render={() => <ProfileContainer store={props.store}/>}/>
                <Route path='/Feed' render={() => <FeedContainer store={props.store}/>}/>
            </div>
            <AsideContainer store={props.store}/>
        </section>
    )
}


export default App

