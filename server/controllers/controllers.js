var Register = require('../model/Register')

var jwt = require('jsonwebtoken')

function handleError(err) {
    console.log(err.message, err.code)

    var errors = {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    }

    // registerdata validation error
    if (err.message.includes('registerdata validation failed')) {
        Object.values(err.errors).forEach(({ properties }) => {
            errors[properties.path] = properties.message
        })
    }

    // duplicate email error
    if (err.code === 11000) {
        errors.email = 'This user already exists'
    }

    return errors
}

var maxAge = 3 * 24 * 60 * 60;
var createCookie = (id) => {
    return jwt.sign({ id }, 'THIS IS A SECRET', {
        expiresIn: maxAge // in sec
    })
}

module.exports.registerMethod = async (req, res) => {
    var { firstName, lastName, emailId, password } = req.params;

    try {
        var register = await Register.create({
            firstName: firstName,
            lastName: lastName,
            email: emailId,
            password: password
        });
        var token = createCookie(register._id)
        res.cookie('jwt', token, { httpOnly: true, maxAge = maxAge * 1000 })
        res.status(201).send({ user: user._id })

    } catch (err) {
        var errors = handleError(err)
        res.status(401).send(errors)
    }
}

// loginMethod 
module.exports.loginMethod = (req, res) => {

    var { emailId, password } = req.params;

    try {
        var authUser = await Register.loginFunc(emailId, password)
        res.status(200).json({ user: user._id })
    }
    catch (err) {
        console.log(err)
        res.status(400).json({})
    }
}
