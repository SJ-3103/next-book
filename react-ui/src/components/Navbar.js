import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../styles/navbar.scss'
import axios from "axios"

export default class Navbar extends Component {

  state = {
    isLoggedIn: false
  }

  componentDidMount = () => {
    axios.get('/check/login', { withCredentials: true })
      .then((data) => {
        if (data.status === 200) {
          this.setState({
            isLoggedIn: true
          })
        }
      })
      .catch(errors => console.log(errors))
  }

  handleLogout = async () => {
    await axios.get("/api/logout").then((data) => {
      this.setState({
        isLoggedIn: false
      })
    }).catch(errors => console.log(errors))
  }

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
            {
              !this.state.isLoggedIn ? 
              <li>
                <Link to='/login'>Sign In</Link>
              </li> 
              : 
              <li onClick={this.handleLogout}>
                <Link to="/">Logout</Link>
              </li>
            }
          </ul>
        </nav>
      </header>
    )
  }
}
