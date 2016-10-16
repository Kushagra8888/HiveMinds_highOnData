import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
//import getData from './parseJSON.js';
var data = require('json!../data/timeline_founders_US.txt');


ReactDOM.render(
  <App data={data}/>,
  document.getElementById('root')
);
