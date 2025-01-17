import React from 'react'
import ReactDOM from 'react-dom'
import './normalize.css'
import './variables.css'
import './index.css'
import App from './App'
import {BrowserRouter} from "react-router-dom";
import store from "./redux/redux-store";
import {Provider} from "react-redux";

export let rerender = () => {
    ReactDOM.render(
        <Provider store={store}>
            <BrowserRouter>
                <App store={store}/>
            </BrowserRouter>
        </Provider>,
        document.getElementById('root'))
}

rerender()

// store.subscribe(() => {
//     rerender(store.getState())
// })
