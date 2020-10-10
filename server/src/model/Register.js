import mongoose from 'mongoose'
import { isEmail } from 'validator'
import bcrypt from 'bcrypt'

var registerSchema = new mongoose.Schema({
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
    collection: "registerdata"
});

// fire a function before saving the data to the database

// registerSchema.pre('save', (next) => {
//     var salt = await bcrypt.genSalt()
//     this.password = await bcrypt.hash(this.password, salt)
//     next()
// })

// loginFunc
registerSchema.statics.loginFunc = async function (email, password) {
    var check_user = await this.findOne({ email: email })
    if (check_user) {
        var check_password = await bcrypt.compare(password, check_user.password)
        if (check_password) {
            return check_password
        } throw Error('Password is incorrect')
    } throw Error('User does not exists')
}

const Register = mongoose.model('registerdata', registerSchema);

export default Register