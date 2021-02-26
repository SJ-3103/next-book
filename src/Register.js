import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import './register.scss'
import axios from 'axios'

export default class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      redirect: null,
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

    // to be completed
    axios.post('/api/register', {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      emailId: this.state.email,
      password: this.state.password
    })
      .catch((err) => {
        console.log(err)
      })
  }

  componentDidMount() {

    // axios.get('/check')
    //   .then((response) => {
    //     console.log(response.data.msg) // Server is working
    //   })
    //   .catch((errors) => {
    //     console.log(errors.message)
    //     if (errors.message.includes('status code 500')) {
    //       console.log('Backend Server is closed')
    //       this.setState({
    //         redirect: '/'
    //       })
    //     }
    //   })

  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }
    return (
      <div className='body-c'>
        <div id='form-container'>
          <h3>Register</h3>
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

          <h4>Already have an account? Sign In here </h4>
        </div>
      </div>
    )
  }
}
