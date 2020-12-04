import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const TG = require('telegram-bot-api')

const api= new TG({
  token : '1351077662:AAHdUwX4N0HpgqgUkh18h44XYtU-E5v4ZGs'
})

api.getMe()
.then(console.log)
.catch(console.error)
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
