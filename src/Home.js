import React, { Component } from "react";
import "./styles/home.scss";

import Navbar from "./components/Navbar";
import BookList from "./components/BookList";

export default class Home extends Component {
  render() {
    return (
      <div className="body">
        <Navbar />
        <SearchBar />
        <Main />
        <Footer />
      </div>
    );
  }
}

class SearchBar extends Component {
  render() {
    return <div id="search-bar">{/* search bar to be added */}</div>;
  }
}

class Main extends Component {
  render() {
    return (
      <main className="products">
        <nav className="list-options">
          <ul>
            <li>Most Rated Books</li>
            <li>Best Selling Books</li>
            <li>New Arrivals</li>
          </ul>
        </nav>
        <BookList title="Most Rated Books" name="MostRated" />
        <BookList title="Best Selling Products" name="BestSelling" />
        <BookList title="New Products" name="NewBooks" />
      </main>
    );
  }
}

class Footer extends Component {
  render() {
    return <footer>Created By Shubham Jain</footer>;
  }
}
