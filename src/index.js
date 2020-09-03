//import react
import React from 'react';
//import react dom
import ReactDom from 'react-dom';
//import app component
import { App } from './components/App';
//import react router
import { HashRouter as Router } from 'react-router-dom';
//import context
import { ContextProvider } from './utils/Context';

const rootElement = document.getElementById('root');

ReactDom.render(
	<ContextProvider>
		<Router basename='/'>
			<App />
		</Router>
	</ContextProvider>,
	rootElement,
);
