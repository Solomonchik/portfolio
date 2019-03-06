import React from 'react';
import { render } from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './stylesheet/style.scss';




render(<App />, document.querySelector('#root'));

serviceWorker.unregister();
