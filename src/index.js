import React from 'react';
import ReactDOMClient from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import 'react-lazy-load-image-component/src/effects/blur.css';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container);
root.render(

      <BrowserRouter>
       
        <App />
      </BrowserRouter>
    
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
