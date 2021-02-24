import mongoose, { Schema } from 'mongoose'

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
})

const CookieData = mongoose.model('cookiedata', cookiedata_schema)

export default CookieData