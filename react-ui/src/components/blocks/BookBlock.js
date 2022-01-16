import React, { Component } from "react";
import book1 from "../../images/book1.jpg";
import { Link } from "react-router-dom";

export default class BookBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      author: this.props.author,
      bookURL: this.props.cover_url,
      goodreads_rating: this.props.goodreads_rating,
      class_name: this.props.class_name,
    };
  }
  render() {
    return (
      <div className="book-block">
        {/* {console.log(this.props)} */}
        <Link to={`/dt/${this.props.id}/${this.props.book_section}`}>
          <img
            alt="imagcia"
            src={this.state.bookURL ? this.state.bookURL : book1}
          />
          <div>
            <h3>{this.state.title}</h3>
            <h4>{this.state.author}</h4>
            <p>
              {"Stars" +
                "  (" +
                this.state.goodreads_rating.$numberDecimal +
                "/5)"}
            </p>
          </div>
        </Link>
      </div>
    );
  }
}