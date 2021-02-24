import UserData from '../model/UserData'
import CookieData from '../model/CookieData'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

async function LoginMethod(req, res) {
    var { emailId, password } = req.body
    try {
        var user = await UserData.findOne({ email: emailId })
        if (user) {
            var check_password = await bcrypt.compare(password, user.password) // compares password
            if (check_password) {

                var token = createCookie(user._id)
                res.cookie('jwt', token, { httpOnly: true }) //add same site
                try {
                    var cookie_data = await CookieData.create({
                        id: user._id,
                        cookie_value: token
                    })
                    console.log('Cookie is stored', cookie_data.cookie_value)
                } catch (err) {
                    // console.log('from cookie database', err)
                    if (err.code === 11000) {
                        // throw Error('User already logged in')
                        res.status(400).json({ msg: 'You are already logged in' })
                    }
                }
                res.status(200).json({ user: user._id, msg: 'You are logged in' })

            } else {
                throw Error('Password is incorrect')
            }
        } else {
            throw Error('Email does not exists')
        }
    }
    catch (err) {
        console.log(err)
        res.status(400).json({ msg: false })
    }
}

const maxAge = 3 * 24 * 60 * 60
const createCookie = (id) => {
    return jwt.sign(
        { id },
        'THIS IS A SECRET',
        {
            expiresIn: maxAge
        }
    )
}
export default LoginMethod