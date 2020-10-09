import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './Home'
import About from './About'
import BookDetail from './BookDetail'
import Register from './Register'

export default class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/register" component={Register}></Route>
        <Route path="/bookDetail/id1" component={BookDetail}></Route>
      </Switch>
    )
  }
}