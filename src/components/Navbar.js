import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './navbar.scss'

export default class Navbar extends Component {
  render() {
    return (
      <header>
        <nav className='navbar'>
          <ul id='menu-left'>
            <li>
              <Link to='/'>Logo</Link>
            </li>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About Us</Link>
            </li>
          </ul>
          <ul id='menu-right'>
            <li>
              <Link to='/register'>Register</Link>
            </li>
            <li>
              <Link to='/'>Sign In</Link>
            </li>
            <li>
              <Link to='/shelf'>Shelf</Link>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}
