import React, { Component } from "react";
import CartItem from "./CartItem";
import CartTotal from "./CartTotal";

class Cart extends Component {
  showCartItem = carts => {
    if (carts) {
      return carts.map((item, index) => {
        return (
          <CartItem
            item={item}
            key={index}
            onChangeQuality={this.props.onChangeQuality}
            onDelete={this.props.onDelete}
          />
        );
      });
    }
  };
  totalCart = carts => {
    let total = 0;
    // Cách 1:
    // for (let i = 0; i < carts.length; i++) {
    //   total += carts[i].price * carts[i].quality;
    // }
    // return total;
    carts.map(item => {
      total += item.price * item.quality;
      return item;
    });
    return total;
  };

  render() {
    return (
      <div className="jumbotron">
        <h1 className="display-3">Giỏ hàng</h1>
        <p className="lead">Những sản phẩm đã mua</p>
        <hr className="my-2" />
        <section className="section">
          <div className="table-responsive">
            <table className="table product-table">
              <thead>
                <tr>
                  <th>Ảnh</th>
                  <th>Sản Phẩm</th>
                  <th>Giá</th>
                  <th>Số Lượng</th>
                  <th>Tổng Cộng</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {this.showCartItem(this.props.carts)}
                <CartTotal total={this.totalCart(this.props.carts)} />
              </tbody>
            </table>
          </div>
        </section>
      </div>
    );
  }
}
export default Cart;
