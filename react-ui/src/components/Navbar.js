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
        <nav className="navbar">
          <ul id="menu-left">
            <li>
              <Link to="/">Logo</Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
          <p>The Book Recommender Website</p>
          <ul id="menu-right">
            {!this.state.isLoggedIn ? (
              <div>
                <li>
                  <Link to="/register">Register</Link>
                </li>
                <li>
                  <Link to="/login">Sign In</Link>
                </li>
              </div>
            ) : (
              <div id="username">
                <li>
                  {this.state.username}
                </li>
                <li onClick={this.handleLogout}>
                  Logout
                </li>
              </div> 
            )}
          </ul>
        </nav>
      </header>
    )
  }
}
