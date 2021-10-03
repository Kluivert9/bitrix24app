import React from "react"
import ReactDOM from "react-dom"
import { Provider } from 'react-redux'

import App from './containers/App'
import store from './store'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const rootElement = document.getElementById("root")
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , rootElement)
