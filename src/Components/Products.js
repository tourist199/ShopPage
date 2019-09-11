import React, { Component } from 'react'
import ProductItem from './ProductItem'
export default class Products extends Component {
    showProducts = (products) => {
        if (products)
            return products.map((item, index)=>{
                return <ProductItem addToCart={this.props.addToCart} item = {item} key = {index} />
            })
    }

    render() {
        var products = this.props.products;
        return (
            <div className="row">
                {this.showProducts(products)}
            </div>
        )
    }
}
