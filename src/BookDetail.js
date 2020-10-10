import React, { Component } from "react"
import './bookDetails.scss'
import NavBar from './components/Navbar'


export default class BookDetail extends Component {
    render() {
        return (
            <div className="bookDetail">
                <NavBar />
                <h4>Here comes Book Details</h4>
                <div className="container">
                    <div className="bookCover">
                        <p>Book Cover</p>
                    </div>
                    <BookData />
                    <GenerData />
                    <Comments />
                </div>
            </div>
        )
    }
}


class BookData extends Component {
    constructor(props) {
        super(props)
        this.state = {
            bookTitle: 'Book Title',
            author: 'book-author',
            avg_rating: 3.5,
            total_ratings: 3000,
            reviews: 4000,
            book_summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
        }
    }
    render() {
        return (
            <div className="book-data">
                <h2>{this.state.bookTitle}</h2>
                <h3>by {this.state.author}(Author)</h3>
                <ul id="rating-details">
                    <li>Stars {this.state.avg_rating}</li>
                    <li>{this.state.total_ratings}(ratings)</li>
                    <li>{this.state.reviews}(review)</li>
                </ul>
                <p>{this.state.book_summary}</p>
            </div>
        )
    }
}

class GenerData extends Component {
    constructor(props) {
        super(props)
        this.state = {
            geners: 'Geners Data'
        }
    }
    render() {
        return (
            <div className="geners-data">
                <h2>Geners</h2>
                <p>{this.state.geners}</p>
            </div>
        )
    }
}

class Comments extends Component {
    constructor(props) {
        super(props)
        this.state = {
            comments: 'here goes comments'
        }
    }
    render() {
        return (
            <div className="comments">
                <h3>{this.state.comments}</h3>
            </div>
        )
    }
}