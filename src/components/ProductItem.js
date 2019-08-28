import React, { Component } from "react";

export default class ProductItem extends Component {
  star = stars => {
    var strStar = "";
    for (var i = 1; i <= stars; i++) {
      strStar += "★ ";
    }
    for (var j = 1; j <= 5 - stars; j++) {
      strStar += "☆ ";
    }
    return strStar;
  };
  render() {
    var product = this.props.item;
    return (
      <div className="col-lg-4 col-md-6 mb-4">
        <div className="card h-100">
          <a href="/">
            <img className="card-img-top" src={product.image} alt="" />
          </a>
          <div className="card-body">
            <h4 className="card-title">
              <a href="/">{product.name}</a>
            </h4>
            <h5>${product.price}</h5>
            <p className="card-text">{product.desc}</p>
          </div>
          <div className="card-footer">
            <small className="text-muted">{this.star(product.star)}</small>
            <a
              href="/"
              className="btn btn-primary btn-sm"
              onClick={this.onClick}
            >
              Mua hàng
            </a>
          </div>
        </div>
      </div>
    );
  }
}
