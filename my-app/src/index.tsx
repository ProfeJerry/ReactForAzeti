import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import "bootstrap/dist/css/bootstrap.min.css";
import App from './App';
import reportWebVitals from './reportWebVitals';
import {loadTheme, createTheme} from "@fluentui/react";


const myTheme = createTheme({
    palette: {
        themePrimary: '#00d40e',
        themeLighterAlt: '#f3fdf4',
        themeLighter: '#d0f8d3',
        themeLight: '#a9f2ae',
        themeTertiary: '#5ce565',
        themeSecondary: '#1ad927',
        themeDarkAlt: '#00be0d',
        themeDark: '#00a10b',
        themeDarker: '#007708',
        neutralLighterAlt: '#000000',
        neutralLighter: '#000000',
        neutralLight: '#000000',
        neutralQuaternaryAlt: '#000000',
        neutralQuaternary: '#000000',
        neutralTertiaryAlt: '#000000',
        neutralTertiary: '#112c02',
        neutralSecondary: '#235704',
        neutralPrimaryAlt: '#338006',
        neutralPrimary: '#3a9107',
        neutralDark: '#5dac30',
        black: '#80c25b',
        white: '#000000',
    }});

loadTheme(myTheme);

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
