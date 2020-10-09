import React, { Component } from 'react';
import './home scss/home.css';
import Navbar from './components/Navbar';
import Products from './components/Products'

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
                <div id="shop-now-div">
                    <span>Discover ethnically </span>
                    <span>cultivated and Fair-Trade gifts </span>
                    <button>Shop Now</button>
                </div>
                <div>Image Goes Here</div>
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
            <main className="products">
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

                <Products title='Trending Products' />

                <Products title='Best Selling Products' />

                <Products title='New Arrivals' />


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