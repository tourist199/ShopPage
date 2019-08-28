import React, { Component } from "react";

class CartTotal extends Component {
  render() {
    let total = this.props.total;

    return (
      <tr>
        <td colSpan="3"></td>
        <td>
          <h4>
            <strong>Tổng Tiền</strong>
          </h4>
        </td>
        <td>
          <h4>
            <strong>{total}$</strong>
          </h4>
        </td>
        <td colSpan="3">
          <button
            type="button"
            className="btn btn-primary waves-effect waves-light"
          >
            Complete purchase
            <i className="fa fa-angle-right right"></i>
          </button>
        </td>
      </tr>
    );
  }
}
export default CartTotal;
