import React from 'react';
import ReactDOM from 'react-dom';
import './views/index.css';
import App from './views/app/App';
import reportWebVitals from './views/reportWebVitals';
import DesktopHeader from './views/desktop-header/DesktopHeader';

ReactDOM.render(
  <React.StrictMode>
    <DesktopHeader/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
