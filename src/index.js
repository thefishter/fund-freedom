import React from 'react'
import {Router, Route, browserHistory, IndexRedirect } from 'react-router';
import { render } from 'react-dom'

import App from './components/App'
import About from './components/About'
import Trends from './components/Trends'
import Donate from './components/Donate'
import DataLayout from './components/DataLayout'
import Visualize from './components/Visualize'
import Datatable from './components/DataTable'

import './index.css'

render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRedirect to="/datatable" />
      <Route path="about" component={About} />
      <Route path="trends" component={Trends} />
      <Route path="donate" component={Donate} />
      <Route component={DataLayout}>
        <Route path="visualize" component={Visualize} />
        <Route path="datatable" component={Datatable} />
      </Route>
    </Route>
  </Router>
  , document.getElementById('root')
)
