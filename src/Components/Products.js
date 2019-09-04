import React, { Component } from "react";
import ProductItem from "./ProductItem";
class Products extends Component {
  showProducts = products => {
    if (products)
      return products.map((item, index) => {
        return (
          <ProductItem
            item={item}
            key={index}
            addToCart={this.props.addToCart}
          />
        );
      });
  };

  render() {
    return <div className="row">{this.showProducts(this.props.products)}</div>;
  }
}
export default Products;
