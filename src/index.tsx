import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom";
import App from "./App";
import store from "./Redux/redux-store";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";






    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
            <App/>
            </Provider>
        </React.StrictMode>,
        document.getElementById('root')
    )




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
