import React, { Component } from 'react'
import { Animated } from 'react-animated-css'
import '../components/productMain.scss'
import book1 from '../images/book1.jpg'

export default class TrendingProducts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      arr: [],
      class_name: 'td_book',
    }
    this.populate_array()
  }

  populate_array = () => {
    let props = this.props.values_for_bookblocks
    for (let i = 1; i <= 10; i++) {
      this.state.arr.push(
        <BookBlock
          key={i}
          bookId={props[i]['bookId']}
          bookTitle={props[i]['book_title']}
          bookAuther={props[i]['book_auther']}
          bookRating={props[i]['book_rating']}
          class_name={this.state.class_name}
        />
      )
    }
  }

  start_index = 0
  end_index = 6

  plusSlideIndex(n) {
    let start_index = this.start_index + n
    let end_index = this.end_index + n
    this.showSlide(start_index, end_index)
  }

  showSlide(start_index, end_index) {
    let slides = document.getElementsByClassName(this.state.class_name)

    if (start_index > 0 && end_index > slides.length) {
      start_index = 0
      end_index = 6
    }
    if (start_index < 0) {
      start_index = 4
      end_index = slides.length
    }
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none'
    }
    for (let i = start_index; i < end_index; i++) {
      slides[i].style.display = 'flex'
    }
    this.start_index = start_index
    this.end_index = end_index
  }

  componentDidMount() {
    this.showSlide(this.start_index, this.end_index)
  }

  render() {
    return (
      <div className='products-wrapper'>
        <p id='title'>Trending Products</p>
        <div className='items'>
          <button
            className='side-icons'
            id='left_bt'
            onClick={() => {
              this.plusSlideIndex(-1)
            }}
          >
            &laquo;
          </button>
          <button
            className='side-icons'
            id='right_bt'
            onClick={() => {
              this.plusSlideIndex(+1)
            }}
          >
            &raquo;
          </button>

          {this.state.arr}
        </div>
      </div>
    )
  }
}

class BookBlock extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bookId: this.props.bookId,
      bookTitle: this.props.bookTitle,
      bookAuthor: this.props.bookAuther,
      bookURL: book1,
      bookRating: this.props.bookRating,
      td_book: this.props.class_name,
    }
  }
  extra_css = {
    display: 'flex',
  }
  render() {
    return (
      <Animated
        animationIn='slideInRight'
        animationOut='slideInLeft'
        animationInDuration={1000}
        animationOutDuration={1000}
        isVisible={true}
        className={this.state.td_book}
        style={this.extra_css}
      >
        <img alt='imagcia' src={this.state.bookURL} />
        <h3>{this.state.bookTitle}</h3>
        <h4>{this.state.bookAuthor}</h4>
        <p>Book Rating : {this.state.bookRating}</p>
      </Animated>
    )
  }
}
