import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header';
import AddToQueue from './AddToQueue';
import App1 from './App1';
import App2 from './App2';
import App3 from './App3';
import Questionaire from './Questionaire'
import DocHome from './DocHome'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Header/>, document.getElementById('root'));
ReactDOM.render(<AddToQueue/>, document.getElementById('content'));
// ReactDOM.render(<App1 />, document.getElementById('left-side'));
// ReactDOM.render(<App2/>, document.getElementById('contents1'));
// ReactDOM.render(<App3/>, document.getElementById('contents2'));
// ReactDOM.render(<Questionaire/>, document.getElementById('contents3'));
// ReactDOM.render(<DocHome/>, document.getElementById('doc-home'));
registerServiceWorker();
