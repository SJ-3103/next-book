import React, { Component } from 'react'
import './home.scss'

import Navbar from './components/Navbar'
import MostRatedProduct from './components/MostRatedProduct'
import BestProducts from './components/BestProducts'
import NewProducts from './components/NewProducts'

export default class Home extends Component {
  render() {
    return (
      <div className='body'>
        <Navbar />
        <SearchBar />
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

class Main extends Component {
  render() {
    return (
      <main className='products'>
        <nav className='list-options'>
          <ul>
            <li>Most Rated Books</li>
            <li>Best Selling Books</li>
            <li>New Arrivals</li>
          </ul>
        </nav>
        <MostRatedProduct />
        <BestProducts />
        <NewProducts />
      </main>
    )
  }
}

class Footer extends Component {
  render() {
    return <footer>Created By Shubham Jain</footer>
  }
}
