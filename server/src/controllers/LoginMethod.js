import Register from '../model/Register'

async function LoginMethod(req, res) {
    var { emailId, password } = req.params
    try {
        var authUser = await Register.loginFunc(emailId, password)
        res.status(200).json({ user: user._id })
    }
    catch (err) {
        console.log(err)
        res.status(400).json({})
    }
}

export default LoginMethod