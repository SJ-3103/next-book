import React, { Component } from 'react'
import './bookDetails.scss'
import NavBar from './components/Navbar'
import book1 from './images/book1.jpg'
let values = {
  cover_url: book1,
  book_data: {
    title: 'Book1',
    author: 'Author1',
    goodreads_rating: 3.5,
    total_rating: 3000,
    reviews: 4000,
    summary:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
  },
  gener_data: {
    geners: 'Geners',
  },
  comment_data: {
    comments: 'Here goes the comments',
  },
}
export default class BookDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bookImage: values.cover_url,
    }
  }
  render() {
    // console.log(props.book_data.author)
    return (
      // <h4>Hello</h4>
      <div className='bookDetail'>
        <NavBar />
        <h4>Here comes Book Details</h4>
        <div className='container'>
          <div className='bookCover'>
            <img alt='Book Cover' src={this.state.bookImage}></img>
          </div>
          <BookData book_data={values.book_data} />
          <GenerData gener_data={values.gener_data} />
          <Comments comment_data={values.comment_data} />
        </div>
      </div>
    )
  }
}

class BookData extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: this.props.book_data.title,
      author: this.props.book_data.author,
      goodreads_rating: this.props.book_data.goodreads_rating,
      total_rating: this.props.book_data.total_rating,
      reviews: this.props.book_data.reviews,
      summary: this.props.book_data.summary,
    }
  }
  render() {
    return (
      <div className='book-data'>
        <h2>{this.state.title}</h2>
        <h3>by {this.state.author}(Author)</h3>
        <ul id='rating-details'>
          <li>Stars {this.state.goodreads_rating}</li>
          <li>{this.state.total_rating}(ratings)</li>
          <li>{this.state.reviews}(review)</li>
        </ul>
        <p>{this.state.summary}</p>
      </div>
    )
  }
}

class GenerData extends Component {
  constructor(props) {
    super(props)
    this.state = {
      geners: this.props.gener_data.geners,
    }
  }
  render() {
    return (
      <div className='geners-data'>
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
      comments: this.props.comment_data.comments,
    }
  }
  render() {
    return (
      <div className='comments'>
        <h3>{this.state.comments}</h3>
      </div>
    )
  }
}
