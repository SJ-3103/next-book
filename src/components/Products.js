import React, { Component } from 'react'

export default class Products extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: 'Here goes the title'
        }
    }
    static getDerivedStateFromProps(props, state) {
        state = {
            title: props.title
        }
        return state
    }
    render() {
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
                    {/* { Apply for loop her } */}
                    <div className="our-products">

                    </div>
                    <div className="our-products">

                    </div>
                    <div className="our-products">

                    </div>
                    <div className="our-products">

                    </div>
                </div>
            </div>
        )
    }
}