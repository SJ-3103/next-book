import mongoose, { Schema, model } from 'mongoose'

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
})

var MostRated = model('mostratedbookdata', mostratedbook_schema)

export default MostRated