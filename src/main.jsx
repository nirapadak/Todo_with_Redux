import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import './assets/css/style.css'
import '@fontsource/poppins'
import '@fontsource/poppins/400.css'
import {Provider} from "react-redux";
import store from "./redux/store/store.js";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
  </React.StrictMode>
)
