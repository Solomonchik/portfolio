import React from 'react';
import {render} from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './stylesheet/style.scss';
import {BrowserRouter} from "react-router-dom";

const application = (
    <BrowserRouter>
        <App/>
    </BrowserRouter>
);


render(application, document.querySelector('#root'));

serviceWorker.unregister();
