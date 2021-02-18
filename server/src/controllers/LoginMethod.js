import UserData from '../model/UserData'
import bcrypt from 'bcrypt'

async function LoginMethod(req, res) {
    var { emailId, password } = req.body
    try {
        var authUser = await UserData.findOne({ email: emailId })
        if (authUser) {
            var check_password = await bcrypt.compare(password, authUser.password)
            if (check_password) {
                res.status(200).json({ mssg: true })
            } else {
                throw Error('Password is incorrect')
            }
        } else {
            throw Error('Email doesnot exists')
        }

        res.status(200).json({ user: user._id })
    }
    catch (err) {
        console.log(err)
        res.status(400).json({ mssg: false })
    }
}

export default LoginMethod