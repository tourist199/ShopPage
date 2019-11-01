import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class ProductItem extends Component {
  showStar = (star) => {
    var rs = ''
    for (var i = 0; i < 5; i++)
      if (i < star)
        rs += '★ ';
      else
        rs += '☆ ';
    return rs;
  }
  onClick = (product) => {
    this.props.addToCart({ ...product, quantity: 1 })
  }
  render() {
    var product = this.props.item;
    return (
      <div className="col-lg-4 col-md-6 mb-4">
        <div className="card h-100">
          <Link to={`/product-detail/${product.id}`}><img className="card-img-top" src={product.image} alt="" /></Link>
          <div className="card-body">
            <h4 className="card-title">
              <Link to={`/product-detail/${product.id}`}>{product.name}</Link>
            </h4>
            <h5>$ {product.price}</h5>
            <p className="card-text">{product.desc}</p>
          </div>
          <div className="card-footer box-flex" >
            <p style={{ color: '#f1c40f' }}>{this.showStar(product.star)}</p>
            <div className="btn btn-danger btn-muahang" onClick={() => { this.onClick(product) }}>Mua hàng</div>
          </div>

        </div>
      </div>

    )
  }
}
