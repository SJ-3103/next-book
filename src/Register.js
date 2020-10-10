import React, { Component } from 'react'
import './register.scss'
import NavBar from './components/Navbar'
import axios from 'axios'

export default class Register extends Component {
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
                firstName: ''
            }
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
            firstName: event.target.value
        })
    }

    handleLastName = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }

    handleEmail = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    handlePassword = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    handleErrors = (errors) => {
        // to extract errors in the state and apply forEach on it
        console.log(errors)
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        try {
            // errors may also come from the express server
            // extract them and show them
            await axios.post(`http://localhost:4000/api/register/${this.state.firstName}/${this.state.lastName}/${this.state.email}/${this.state.password}`)
        } catch (err) {
            console.log(err)
            if (err.message.includes('Network Error')) {
                // show user 'Network Error Page' and stop event loop
            }

        }

    }
    render() {
        return (
            <div>
                <NavBar />
                <main className="main-container">
                    <div className="box-container">
                        <form className="container" onSubmit={this.handleSubmit}>
                            <h3>Login</h3>
                            <h4>Doestn't have an account yet? Sign Up</h4>

                            {/* for first name */}
                            <lable>Enter First name:</lable>
                            <input value={this.state.firstName} type="text" onChange={this.handleFirstName} />
                            <p id="errors">{this.state.errors.firstName}</p>

                            {/* for last name */}
                            <lable>Enter Last name:</lable>
                            <input value={this.state.lastName} type="text" onChange={this.handleLastName} />
                            <p id="errors">{this.state.errors.lastName}</p>

                            {/* for email */}
                            <lable>Enter Email:</lable>
                            <input value={this.state.email} type="text" onChange={this.handleEmail} />
                            <p id="errors">{this.state.errors.email}</p>

                            {/* for password */}
                            <lable>Enter Password:</lable>
                            <input value={this.state.password} type="text" onChange={this.handlePassword} />
                            <p id="errors">{this.state.errors.password}</p>

                            {/* for register button */}
                            <button id="button" type="submit" onClick={this.handleSubmit}>Register</button>
                        </form>
                        <img alt="here comes the pictura"></img>
                    </div>
                </main>
            </div>
        )
    }
}