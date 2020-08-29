//import react
import React from 'react';
//import react dom
import ReactDom from 'react-dom';
//import app component
import { App } from './components/App'

const rootElement = document.getElementById('root');

ReactDom.render(<App />, rootElement);