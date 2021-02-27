import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import './register.scss'
import axios from 'axios'
import Navbar from './components/Navbar'
export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            redirect: null,
            email: '',
            password: '',
            errors: {
                email: '',
                password: '',
            },
        }
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
        axios.post('/api/login', {
            emailId: this.state.email,
            password: this.state.password
        }, { withCredentials: true })
            .then((response) => {
                console.log(response)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    componentDidMount() {
        axios.get('/check')
            .then((response) => {
                console.log(response.data.msg) // Server is working
            })
            .catch((errors) => {
                console.log(errors.message)
                if (errors.message.includes('status code 500')) {
                    console.log('Backend Server is closed')
                    this.setState({
                        redirect: '/'
                    })
                }
            })
        axios.get('/check/login', { withCredentials: true })
            .then(response => console.log(response))
            .catch(errors => console.log(errors))

    }
    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }
        return (
            <div className='body-c'>
                <Navbar />
                <div id='form-container'>
                    <h3>Login</h3>
                    <form id='register-form' onSubmit={this.handleSubmit}>

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
                        <button id='button' type='submit' onClick={this.handleSubmit}>Login</button>
                    </form>

                    <h4>Doesn't have an account? Sign up here </h4>
                </div>
            </div>
        )
    }
}
