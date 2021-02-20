import React, { Component } from 'react'
import './register.scss'
// import NavBar from './components/Navbar'

export default class Register extends Component {
  render() {
    return (
      <div className='body-c'>
        <div id='form-container'>
          <h3>Login</h3>
          <form id='register-form' onSubmit={this.handleSubmit}>
            <input
              value={this.state.firstName}
              type='text'
              onChange={this.handleFirstName}
              placeholder='Enter First name'
              className='form-input'
            />
            <p id='errors'>{this.state.errors.firstName}</p>

            <input
              value={this.state.lastName}
              type='text'
              onChange={this.handleLastName}
              placeholder='Enter Last name'
              className='form-input'
            />
            <p id='errors'>{this.state.errors.lastName}</p>

            <input
              value={this.state.email}
              type='text'
              onChange={this.handleEmail}
              placeholder='Enter Email'
              className='form-input'
            />
            <p id='errors'>{this.state.errors.email}</p>

            <input
              value={this.state.password}
              type='text'
              onChange={this.handlePassword}
              placeholder='Enter Password'
              className='form-input'
            />
            <p id='errors'>{this.state.errors.password}</p>

            {/* for register button */}
            <button id='button' type='submit' onClick={this.handleSubmit}>
              Register
            </button>
          </form>

          <h4>Doestn't have an account yet? Sign Up</h4>
        </div>
      </div>
    )
  }
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      errors: {
        email: '',
        password: '',
        lastName: '',
        firstName: '',
      },
    }
    this.handleFirstName = this.handleFirstName.bind(this)
    this.handleLastName = this.handleLastName.bind(this)
    this.handleEmail = this.handleEmail.bind(this)
    this.handlePassword = this.handlePassword.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleErrors = this.handleErrors.bind(this)
  }

  handleFirstName = (event) => {
    this.setState({
      firstName: event.target.value,
    })
  }

  handleLastName = (event) => {
    this.setState({
      lastName: event.target.value,
    })
  }

  handleEmail = (event) => {
    this.setState({
      email: event.target.value,
    })
  }

  handlePassword = (event) => {
    this.setState({
      password: event.target.value,
    })
  }

  handleErrors = (errors) => {
    // to extract errors in the state and apply forEach on it
    console.log(errors)
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    try {
      // errors may also come from the express server
      // extract them and show them
      // await fetch(
      // )
    } catch (err) {
      console.log(err)
      if (err.message.includes('Network Error')) {
        // show user 'Network Error Page' and stop event loop
      }
    }
  }
}
