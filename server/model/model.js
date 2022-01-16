var mongoose = require('mongoose');
var { Schema, model } = require('mongoose');
var bcrypt = require('bcrypt');
var { isEmail } = require('validator');

const {user_db_name,cookie_db_name} = require("../config/config");
const user_db = user_db_name
const cookie_db = cookie_db_name

// cookie data schema
var cookiedata_schema = new Schema({
    id: {
        type: String,
        unique: true,
        required: [true, 'Id is a required field']
    },
    cookie_value: {
        type: String,
        required: [true, 'Cookie Value is a required field'],
    }
}, {
    collection: cookie_db
});

// user data schema
var userSchema = new Schema({
    firstName: {
        type: String,
        required: [true, 'First name is a required field']
    },
    lastName: {
        type: String,
        required: [true, 'Last name is required field']
    },
    email: {
        type: String,
        required: [true, 'Email is a required field'],
        unique: true,
        lowercase: true,
        validate: [isEmail, 'Please enter a correct email']
    },
    password: {
        type: String,
        required: [true, 'Password is a required field'],
        minlength: [6, 'Minimum length must be 6']
    }
}, {
    collection: user_db
});

// fire a function before saving the data to the database
userSchema.pre('save', async function () {
    var salt = await bcrypt.genSalt()
    this.password = await bcrypt.hash(this.password, salt)
})

const CookieData = model('cookiedata', cookiedata_schema);
const UserData = model('userdata',userSchema)

module.exports = {
    CookieData,
    UserData
};