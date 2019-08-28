import React, { Component } from 'react'

export default class CartTotal extends Component {
    render() {
        return (
            <tr>
                                    <td colspan="3"></td>
                                    <td>
                                        <h4>
                                            <strong>Tổng Tiền</strong>
                                        </h4>
                                    </td>
                                    <td>
                                        <h4>
                                            <strong>15$</strong>
                                        </h4>
                                    </td>
                                    <td colspan="3">
                                        <button type="button" className="btn btn-primary waves-effect waves-light">Complete purchase
                                            <i className="fa fa-angle-right right"></i>
                                        </button>
                                    </td>
                                </tr>
        )
    }
}
