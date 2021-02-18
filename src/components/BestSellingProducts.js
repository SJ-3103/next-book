/* 
    when this component load then:
    1. call backend api
    2. save data in some variable
    3. loop over data
    4. close the request response loop
*/
import React, { Component } from 'react'

export default class BestSellingProducts extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: 'Best Selling Products'
        }
    }

    productsDiv = []
    myFunc() {
        for (let i = 1; i <= 4; i++) {
            this.productsDiv.push(
                <div className="our-products">
                    {/* book img, book title, booka author, book rating */}
                    <img alt="some text here"></img>
                    <div id="bookData">
                        <p>Book Title</p>
                        <p>Author</p>
                        <p>Ratings</p>
                    </div>
                </div>
            )
        }
    }

    render() {
        this.myFunc()
        return (
            <div className="objects">
                <p>
                    <span>{this.state.title}</span>
                    <span>
                        <button className="side-icons">&laquo;</button>
                        <button className="side-icons">&raquo;</button>
                    </span>
                </p>
                <div className="rowwise-this">
                    {this.productsDiv}
                </div>
            </div>
        )
    }
}