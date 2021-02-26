import React, { Component } from 'react'
import book1 from '../../images/book1.jpg'

export default class BookBlock extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: this.props.title,
            author: this.props.author,
            bookURL: book1,
            goodreads_rating: this.props.goodreads_rating,
            class_name: this.props.class_name,
        }
    }
    extra_css = {
        display: 'flex',
    }
    render() {
        return (
            <div className={this.state.class_name} style={this.extra_css}>
                <img alt='imagcia' src={this.state.bookURL} />
                <h3>{this.state.title}</h3>
                <h4>{this.state.author}</h4>
                <p>Book Rating : {this.state.goodreads_rating}</p>
            </div>
        )
    }
}