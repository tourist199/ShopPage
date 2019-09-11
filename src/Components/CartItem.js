import React, { Component } from 'react'

export default class CartItem extends Component {
    render() {
        var product = this.props.item;
        
        return (
            <tr>
                <th scope="row">
                    <img src={product.image} alt="" className="img-fluid z-depth-0"/>
                </th>
                <td>
                    <h5>
                        <strong>{product.name}</strong>
                    </h5>
                </td>
                <td>{product.price}$</td>
                <td className="center-on-small-only">
                    <span className="qty">{product.quantity} </span>
                    <div className="btn-group radio-group" data-toggle="buttons">
                        <label onClick={()=>{this.props.changeQuantity(product,-1)}} className="btn btn-sm btn-primary
                            btn-rounded waves-effect waves-light">
                            <a href="/" >—</a>
                        </label>
                        <label onClick={()=>{this.props.changeQuantity(product,1)}} className="btn btn-sm btn-primary
                            btn-rounded waves-effect waves-light">
                            <a href="/" >+</a>
                        </label>
                    </div>
                </td>
                <td>{product.quantity * product.price}$</td>
                <td>
                    <button onClick={()=>{this.props.onDelete(product)}} type="button" className="btn btn-sm btn-primary waves-effect waves-light" >
                        X
                    </button>
                </td>
            </tr>
        )
    }
}
