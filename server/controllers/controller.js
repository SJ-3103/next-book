var {
    CookieData,
    UserData,
} = require('../model/model');

var {
    best_book_data,
    most_rated_data,
    new_book_data
} = require("../data/mydata.json")

var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');

async function Register(req, res) {
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
    return jwt.sign(
        { id },
        'THIS IS A SECRET',
        {
            expiresIn: maxAge // in sec
        }
    )
}

async function Login(req, res) {
    var { emailId, password } = req.body
    try {
        var user = await UserData.findOne({ email: emailId })
        if (user) {
            var check_password = await bcrypt.compare(password, user.password) // compares password
            if (check_password) {
                let cookie_db_obj = await CookieData.find({ id: user._id })
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

async function LogOut(req, res) {
    if (req.headers.cookie) {
        let cookie_from_client = req.headers.cookie.slice(4)
        await CookieData.findOneAndDelete({ cookie_value: cookie_from_client })
    }
    res.cookie('jwt', "", { httpOnly: true })
    res.send('Logout Method calling')

}

function GetDetails(req,res) {
    var { id, name } = req.query;
    
    try {    
        if (name === "MostRated") {
            for(let i=0; i<most_rated_data.length; i++) {
                if(most_rated_data[i]._id == id){
                    var data = most_rated_data[i];
                }
            }
        }

        if (name === "BestSelling") {
            for(let i=0; i<best_book_data.length; i++) {
                if(best_book_data[i]._id == id){
                    var data = best_book_data[i];
                }
            }
        }

        if (name === "NewBooks") {
            for(let i=0; i<new_book_data.length; i++) {
                if(new_book_data[i]._id == id){
                    var data = new_book_data[i];
                }
            }
        }
        res.status(200).json({ data: data });
    } catch (err) {
        console.log(err);
    }
}

async function SendBooks(req, res) {
    var { name } = req.query;
    if (name === "MostRated") {
        try {
            var data = most_rated_data;
            res.status(200).json({ data: data });
        } catch (err) {
            console.log(err);
        }
    } else if (name === "BestSelling") {
        try {
            var data = best_book_data;
            res.status(200).json({ data: data });
        } catch (err) {
            console.log(err);
        }
    } else if (name === "NewBooks") {
        try {
            var data = new_book_data;
            res.status(200).json({ data: data });
        } catch (err) {
            console.log(err);
        }
    } else {
        res.status(400).json({ msg: "Collection Name incorrect" });
    }
}

async function CheckLogin(req, res) {
    if (req.headers.cookie) {

        let cookie_from_client = req.headers.cookie.slice(4)

        let cookie_from_database = await CookieData.find({ cookie_value: cookie_from_client })

        if (cookie_from_database.length > 0) {
            res.status(200).json({ msg: 'You are already logged in' })
            return
        }

    }

    res.cookie('jwt', "", { httpOnly: true })
    res.status(400).json({ msg: 'Please Login' })
    return
}
module.exports = {
    Register,
    Login,
    LogOut,
    GetDetails,
    SendBooks,
    CheckLogin
}