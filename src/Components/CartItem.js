import React, { Component } from "react";

class CartItem extends Component {
  render() {
    let cart = this.props.item;
    return (
      <tr>
        <th scope="row">
          <img
            src={cart.image}
            alt={cart.name}
            className="img-fluid z-depth-0"
          />
        </th>
        <td>
          <h5>
            <strong>{cart.name}</strong>
          </h5>
        </td>
        <td>{cart.price}$</td>
        <td className="center-on-small-only">
          <span className="qty">{cart.quality} </span>
          <div className="btn-group radio-group" data-toggle="buttons">
            <label
              className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
              onClick={() => {
                this.props.onChangeQuality(cart, -1);
              }}
            >
              <span>—</span>
            </label>
            <label
              className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
              onClick={() => {
                this.props.onChangeQuality(cart, +1);
              }}
            >
              <span>+</span>
            </label>
          </div>
        </td>
        <td>{cart.price * cart.quality}$</td>
        <td>
          <button
            type="button"
            className="btn btn-sm btn-primary waves-effect waves-light"
            data-toggle="tooltip"
            data-placement="top"
            title=""
            data-original-title="Remove item"
            onClick={() => {
              this.props.onDelete(cart);
            }}
          >
            X
          </button>
        </td>
      </tr>
    );
  }
}
export default CartItem;
