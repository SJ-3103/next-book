import UserData from '../model/UserData'
import jwt from 'jsonwebtoken'

async function RegisterMethod(req, res) {
    // var { firstName, lastName, emailId, password } = req.body.toString();
    var { firstName, lastName, emailId, password } = req.body
    console.log(req.body)

    try {
        var userdata = await UserData.create({
            firstName: firstName,
            lastName: lastName,
            email: emailId,
            password: password
        });
        var token = createCookie(userdata._id)
        res.cookie('jwt', token, { httpOnly: true })
        res.status(201).send({ user: userdata._id })

    } catch (err) {
        var errors = handleError(err)
        console.log(errors)
        res.status(401).send(errors)
    }
}

function handleError(err) {
    // console.log(err.message, err.code)

    var errors = {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    }

    // registerdata validation error
    if (err.message.includes("userdata validation failed")) {
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

var maxAge = 3 * 24 * 60 * 60
var createCookie = (id) => {
    return jwt.sign({ id }, 'THIS IS A SECRET', {
        expiresIn: maxAge // in sec
    })
}

export default RegisterMethod