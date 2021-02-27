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
                let cookie_db_obj = await CookieData.findOne({ id: user.id })
                let cookie_from_db = "jwt=" + cookie_db_obj.cookie_value
                if (req.headers.cookie === cookie_from_db) {
                    res.status(400).json({ msg: 'You are already logged in' })
                }
                else {
                    var token = createCookie(user._id)
                    res.cookie('jwt', token, { httpOnly: true }) //add same site
                    try {
                        var cookie_data = await CookieData.create({
                            id: user._id,
                            cookie_value: token
                        })
                    }
                    catch (err) {
                        console.log(`DB Error occured + ${err.message}`)
                    }
                    res.status(200).json({ user: user._id, msg: 'Login Successful' })
                }
            } else {
                throw Error('Password is incorrect')
            }
        } else {
            throw Error('User does not exist')
        }
    }
    catch (err) {
        console.log(err.message)
        res.status(400).json({ msg: "DB error" })
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