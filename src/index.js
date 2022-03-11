import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import UserDataReducer from "./features/reducers/UserDataReducer"
import {createStore } from 'redux'
import {Provider} from 'react-redux'


const store = createStore(UserDataReducer)

ReactDOM.render(
  <React.StrictMode>
  <Provider store ={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

