var mongoose = require('mongoose');
var { Schema, model } = require('mongoose');
var bcrypt = require('bcrypt');
var { isEmail } = require('validator');

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
    collection: "cookiedata"
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
    collection: "userdata"
});

// fire a function before saving the data to the database
userSchema.pre('save', async function () {
    var salt = await bcrypt.genSalt()
    this.password = await bcrypt.hash(this.password, salt)
})

// best book data schema
var bestbook_schema = new Schema({
    title: {
        type: String,
        required: true
    },
    small_title: {
        type: String,
        required: true
    },
    cover_url: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    author_works: {
        type: String,
        required: true
    },
    summary: {
        type: String,
        required: true
    },
    goodreads_rating: {
        type: mongoose.Decimal128,
        required: true
    },
    total_ratings: {
        type: Number,
        required: true
    },
    publication_year: {
        type: Number,
        required: true
    }
}, {
    collection: "bestbookdata"
});

// most rated data schema
var mostratedbook_schema = new Schema({
    title: {
        type: String,
        required: true
    },
    small_title: {
        type: String,
        required: true
    },
    cover_url: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    author_works: {
        type: String,
        required: true
    },
    summary: {
        type: String,
        required: true
    },
    goodreads_rating: {
        type: mongoose.Decimal128,
        required: true
    },
    total_ratings: {
        type: Number,
        required: true
    },
    publication_year: {
        type: Number,
        required: true
    }
}, {
    collection: "mostratedbookdata"
});

// new books data schema
var newbook_schema = new Schema({
    title: {
        type: String,
        required: true
    },
    small_title: {
        type: String,
        required: true
    },
    cover_url: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    author_works: {
        type: String,
        required: true
    },
    summary: {
        type: String,
        required: true
    },
    goodreads_rating: {
        type: mongoose.Decimal128,
        required: true
    },
    total_ratings: {
        type: Number,
        required: true
    },
    publication_year: {
        type: Number,
        required: true
    }
}, {
    collection: "newbookdata"
});

var NewBooks = model('newbookdata', newbook_schema);
var MostRated = model('mostratedbookdata', mostratedbook_schema);
const BestSelling = model('bestbookdata', bestbook_schema);
const UserData = model('userdata', userSchema);
const CookieData = model('cookiedata', cookiedata_schema);

module.exports = {
    CookieData,
    UserData,
    BestSelling,
    MostRated,
    NewBooks
};