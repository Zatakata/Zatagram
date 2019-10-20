import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {BrowserRouter} from "react-router-dom";
import store from "./redux/redux-store";

export let rerender = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App store={store}/>
        </BrowserRouter>,
        document.getElementById('root'))
}

rerender(store.getState())

store.subscribe(() => {
    rerender(store.getState())
})
