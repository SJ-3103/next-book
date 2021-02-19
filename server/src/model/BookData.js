import mongoose, { Schema, model } from 'mongoose'

var dataSchema = new Schema({
    id: {
        type: Number,
        required: true
    },
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
    }
}, {
    collection: "bookdata"
})

var BookData = model('bookdata', dataSchema)

export default BookData