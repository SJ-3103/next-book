import React, { Component } from 'react'
import '../components/productMain.scss'
import BookBlock from './blocks/BookBlock'

export default class MostRatedProduct extends Component {
  constructor(props) {
    super(props)
    this.state = {
      arr: [],
      JSONData: [
        {
          bookId: 1,
          title: 'Name 1',
          author: 'Author 1',
          goodreads_rating: 1,
        },
        {
          bookId: 2,
          title: 'Name 2',
          author: 'Author 2',
          goodreads_rating: 2,
        },
        {
          bookId: 3,
          title: 'Name 3',
          author: 'Author 3',
          goodreads_rating: 3,
        },
        {
          bookId: 4,
          title: 'Name 4',
          author: 'Author 4',
          goodreads_rating: 4,
        },
        {
          bookId: 5,
          title: 'Name 5',
          author: 'Author 5',
          goodreads_rating: 5,
        },
        {
          bookId: 6,
          title: 'Name 6',
          author: 'Author 6',
          goodreads_rating: 6,
        },
        {
          bookId: 7,
          title: 'Name 7',
          author: 'Author 7',
          goodreads_rating: 7,
        },
        {
          bookId: 8,
          title: 'Name 8',
          author: 'Author 8',
          goodreads_rating: 8,
        },
        {
          bookId: 9,
          title: 'Name 9',
          author: 'Author 9',
          goodreads_rating: 9,
        },
        {
          bookId: 10,
          title: 'Name 10',
          author: 'Author 10',
          goodreads_rating: 10,
        }
      ],
      class_name: 'td_book',
    }
    this.populate_array()
  }

  populate_array = () => {
    for (let i = 0; i < this.state.JSONData.length; i++) {
      this.state.arr.push(
        <BookBlock
          key={i}
          title={this.state.JSONData[i]['title']}
          author={this.state.JSONData[i]['author']}
          goodreads_rating={this.state.JSONData[i]['goodreads_rating']}
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
        <p id='title'>Most Rated Books</p>
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


