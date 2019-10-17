import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {BrowserRouter} from "react-router-dom";
import store from "./redux/redux-state";

export let rerender = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} dispatch={store.dispatch.bind(store)} />
        </BrowserRouter>,
        document.getElementById('root'))
}

rerender(store.getState())

store.subscribe(() => {
    rerender(store.getState())
})
