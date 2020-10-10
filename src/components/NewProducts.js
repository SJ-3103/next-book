import React, { Component } from 'react'

export default class NewProducts extends Component {
    state = {
        title: 'New Arrivals'
    }
    value = []
    myFunc() {
        for (let i = 1; i <= 4; i++) {
            this.value.push(<div className="our-products"></div>)
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
                    {this.value}
                </div>
            </div>
        )
    }
}