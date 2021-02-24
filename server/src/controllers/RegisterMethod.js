import UserData from '../model/UserData'
import jwt from 'jsonwebtoken'
import CookieData from '../model/CookieData';

async function RegisterMethod(req, res) {
    var { firstName, lastName, emailId, password } = req.body
    try {
        var userdata = await UserData.create({
            firstName: firstName,
            lastName: lastName,
            email: emailId,
            password: password
        });
        var token = createCookie(userdata._id) //this value is jwt => token created
        res.cookie('jwt', token, { httpOnly: true }) // add same site

        try {
            var cookiedata = await CookieData.create({
                id: userdata._id,
                cookie_value: token
            })
            console.log("Cookie is stored successfully")
        } catch (err) {
            console.log(err)
        }

        res.status(201).send({ user: userdata._id })
    } catch (err) {
        var errors = handleError(err)
        res.status(401).send(errors)
    }
}

function handleError(err) {
    // console.log(err.message,err.code)
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