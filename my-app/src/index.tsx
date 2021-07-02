import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import "bootstrap/dist/css/bootstrap.min.css";
import App from './App';
import reportWebVitals from './reportWebVitals';
import {loadTheme, createTheme} from "@fluentui/react";


const myTheme = createTheme({
    palette: {
        themePrimary: '#d400c9',
        themeLighterAlt: '#fdf3fd',
        themeLighter: '#f8d0f6',
        themeLight: '#f2a9ee',
        themeTertiary: '#e55cde',
        themeSecondary: '#d91acf',
        themeDarkAlt: '#be00b5',
        themeDark: '#a10099',
        themeDarker: '#770071',
        neutralLighterAlt: '#0c0c0c',
        neutralLighter: '#0c0c0c',
        neutralLight: '#0c0b0b',
        neutralQuaternaryAlt: '#0b0b0b',
        neutralQuaternary: '#0a0a0a',
        neutralTertiaryAlt: '#0a0a0a',
        neutralTertiary: '#c8c8c8',
        neutralSecondary: '#d0d0d0',
        neutralPrimaryAlt: '#dadada',
        neutralPrimary: '#ffffff',
        neutralDark: '#f4f4f4',
        black: '#f8f8f8',
        white: '#0d0c0c',
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
