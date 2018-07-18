import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

// BrowserRouter added for creating links
// uses the HTML5 history, keep your UI in sync with the URL
ReactDOM.render(
	<BrowserRouter>
        <App />
    </BrowserRouter>, 
	document.getElementById('root')
	);