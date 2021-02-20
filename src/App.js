import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './Home'
import About from './About'
import Register from './Register'
// import BookDetail from './BookDetail'

export default class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route path='/about' component={About}></Route>
        <Route path='/register' component={Register}></Route>
        {/* <Route path='/bd' component={BookDetail}></Route> */}
      </Switch>
    )
  }
}
