import React, { Component } from "react";
import "../components/productMain.scss";
import BookBlock from "./blocks/BookBlock";
import axios from "axios";
import { nextSlidesIndex, prevSlidesIndex } from "./utils";

export default class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: [],
      loading: true,
      start_index: 0,
      slide_size: 6,
    };
    this.changeSlides=this.changeSlides.bind(this)
  }
  changeSlides = (step, n) => {
    let indexObj = {
      start_index: this.state.start_index,
      slide_size: this.state.slide_size,
    };
    let start_index = null;
    if (step === "prev") {
      start_index = prevSlidesIndex(n, indexObj, this.state.arr.data.length);
    }
    if (step === "next") {
      start_index = nextSlidesIndex(n, indexObj, this.state.arr.data.length);
    }
    this.setState({
      start_index: start_index,
    });
  };

  componentDidMount = async () => {
    await axios
      .get("/api/get/books", { params: { name: this.props.name } })
      .then(({ data }) => {
        this.setState({
          arr: data,
          loading: false,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="products-wrapper">
        <h2 id="title">{this.props.title}</h2>
        <div className="items">
          <button
            className="side-icons"
            id="left_bt"
            onClick={() => {
              this.changeSlides("prev", 1);
            }}
          >
            &laquo;
          </button>
          <button
            className="side-icons"
            id="right_bt"
            onClick={() => {
              this.changeSlides("next", 1);
            }}
          >
            &raquo;
          </button>
          {!this.state.loading ? (
            this.state.arr.data ? (
              this.state.arr.data
                .slice(
                  this.state.start_index,
                  this.state.start_index + this.state.slide_size
                )
                .map((el) => {
                  return (
                    <BookBlock
                      key={el._id}
                      id={el._id}
                      title={el.title}
                      author={el.author}
                      cover_url={el.cover_url}
                      goodreads_rating={el.goodreads_rating}
                      book_section={this.props.name}
                    />
                  );
                })
            ):(
              <>Loading....</>
            )
          ) : (
            <>Loading....</>
          )}
        </div>
      </div>
    );
  }
}