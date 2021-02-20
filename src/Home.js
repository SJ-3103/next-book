import React, { Component } from 'react'
import './home.scss'

import Navbar from './components/Navbar'
import TrendingProducts from './components/TrendingProducts'
import BestProducts from './components/BestProducts'
import NewProducts from './components/NewProducts'

export default class Home extends Component {
  render() {
    return (
      <div className='body'>
        <Navbar />
        <SearchBar />
        <Details />
        <Main />
        <Footer />
      </div>
    )
  }
}

class SearchBar extends Component {
  render() {
    return <div id='search-bar'>{/* search bar to be added */}</div>
  }
}

class Details extends Component {
  render() {
    return (
      <div className='details'>
        <div className='flex-props'>
          <p className='bold-text'>Free Shipping US</p>
          <p className='faded-text'>On all order over 250</p>
        </div>
        <div className='flex-props'>
          <p className='bold-text'>Money Guarantee</p>
          <p className='faded-text'>30 days money back</p>
        </div>
        <div className='flex-props'>
          <p className='bold-text'>Payment Secured</p>
          <p className='faded-text'>Secure all your payments</p>
        </div>
        <div className='flex-props'>
          <p className='bold-text'>Power Support</p>
          <p className='faded-text'>Online services 24/7</p>
        </div>
      </div>
    )
  }
}

class Main extends Component {
  JSONData = {
    1: {
      bookId: 1,
      book_title: 'Name 1',
      book_auther: 'Auther 1',
      book_rating: 1,
    },
    2: {
      bookId: 2,
      book_title: 'Name 2',
      book_auther: 'Auther 2',
      book_rating: 2,
    },
    3: {
      bookId: 3,
      book_title: 'Name 3',
      book_auther: 'Auther 3',
      book_rating: 3,
    },
    4: {
      bookId: 4,
      book_title: 'Name 4',
      book_auther: 'Auther 4',
      book_rating: 4,
    },
    5: {
      bookId: 5,
      book_title: 'Name 5',
      book_auther: 'Auther 5',
      book_rating: 5,
    },
    6: {
      bookId: 6,
      book_title: 'Name 6',
      book_auther: 'Auther 6',
      book_rating: 6,
    },
    7: {
      bookId: 7,
      book_title: 'Name 7',
      book_auther: 'Auther 7',
      book_rating: 7,
    },
    8: {
      bookId: 8,
      book_title: 'Name 8',
      book_auther: 'Auther 8',
      book_rating: 8,
    },
    9: {
      bookId: 9,
      book_title: 'Name 9',
      book_auther: 'Auther 9',
      book_rating: 9,
    },
    10: {
      bookId: 10,
      book_title: 'Name 10',
      book_auther: 'Auther 10',
      book_rating: 10,
    },
  }
  render() {
    return (
      <main className='products'>
        <nav className='list-options'>
          <ul>
            <li>Trending Books</li>
            <li>Best Selling Books</li>
            <li>New Arrivals</li>
            <li>
              VIEW ALL<span>&raquo;</span>
            </li>
          </ul>
        </nav>
        <TrendingProducts values_for_bookblocks={this.JSONData} />
        <BestProducts values_for_bookblocks={this.JSONData} />
        <NewProducts values_for_bookblocks={this.JSONData} />
      </main>
    )
  }
}

class Footer extends Component {
  render() {
    return <footer>Footer goes here</footer>
  }
}
