import React, { Component } from 'react';
import ProductDetail from '../Components/ProductDetail';
import { connect } from 'react-redux';

class ProductDetailContainer extends Component {
    render() {
        return (
            <div>
                <ProductDetail 
                    addToCart={this.addToCart} 
                    history={this.props.history} 
                    match={this.props.match} 
                    listDT = {this.props.listProducts} 
                />
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        listProducts: state.listProducts
    }
}
export default connect (mapStateToProps) (ProductDetailContainer);