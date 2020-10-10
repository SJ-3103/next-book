import React, { Component } from 'react'
import './home.scss'
import bookImage from './images/book.jpeg'

import Navbar from './components/Navbar'

import TrendingProducts from './components/TrendingProducts'
import BestSellingProducts from './components/BestSellingProducts'
import NewProducts from './components/NewProducts'

export default class Home extends Component {
    render() {
        return (
            <div className="body">
                <Navbar />
                <ShopButton />
                <FreeShip />
                <Main />
                <Footer />
            </div>
        )
    }
}

class ShopButton extends Component {
    render() {
        return (
            <div className="grid-container" >
                <img alt="Book Cover goes here" src={bookImage}></img>
            </div>
        )
    }
}
class FreeShip extends Component {
    render() {
        return (
            <div className="free-ship">
                <div className="flex-props">
                    <span className="bold-text">Free Shipping US</span>
                    <span className="faded-text">On all order over 250</span>
                </div>
                <div className="flex-props">
                    <span className="bold-text">Money Guarantee</span>
                    <span className="faded-text">30 days money back</span>
                </div>
                <div className="flex-props">
                    <span className="bold-text">Payment Secured</span>
                    <span className="faded-text">Secure all your payments</span>
                </div>
                <div className="flex-props">
                    <span className="bold-text">Power Support</span>
                    <span className="faded-text">Online services 24/7</span>
                </div>
            </div>
        )
    }
}
class Main extends Component {
    render() {
        return (
            <main id="buyNow" className="products">
                <div className="list-options">
                    <nav>
                        <ul>
                            <li>FASHION MEN'S</li>
                            <li>FASHION WOMEN'S</li>
                            <li>HANDBAGS</li>
                            <li>ACCESSORIES</li>
                            <li>VIEW ALL<span>&raquo;</span></li>
                        </ul>
                    </nav>
                </div>

                <TrendingProducts />

                <BestSellingProducts />

                <NewProducts />


            </main>
        )
    }
}
class Footer extends Component {
    render() {
        return (
            <footer>Footer goes here</footer>
        )
    }
}