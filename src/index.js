import React from 'react';
//import ReactDOM from 'react-dom';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './App';

import { createStore } from 'redux'

import {selectInput, buttonPressed} from "./actions/factories"
import {ndflApp} from "./actions/reducers"

window.selectInput = selectInput
window.buttonPressed = buttonPressed

let store = createStore(ndflApp)

// let unsubscribe = store.subscribe(() => {
//   	let state = store.getState()
//   	console.log("BeforeTax: " + state.beforeTax.value + "\nAfterTax: " + state.afterTax.value)
// 	}
// )

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)