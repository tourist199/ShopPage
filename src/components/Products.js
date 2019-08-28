import React, { Component } from "react";
import ProductItem from "./ProductItem";

export default class Products extends Component {
  productItem = products => {
    if (products)
      return products.map((item, index) => {
        return <ProductItem item={item} key={index} />;
      });
  };
  render() {
    return <div className="row">{this.productItem(this.props.products)}</div>;
  }
}
