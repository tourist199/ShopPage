import React, { Component } from 'react'
import CartTotal from './CartTotal'
import CartItem from './CartItem'

export default class Cart extends Component {
    render() {
        return (
            <div className="jumbotron">
                <h1 className="display-3">Giỏ hàng</h1>
                <hr className="my-2" />
                <section className="section">
                    <div className="table-responsive">
                        <table className="table product-table">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Sản Phẩm</th>
                                    <th>Giá</th>
                                    <th>Số Lượng</th>
                                    <th>Tổng Cộng</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <CartItem />
                                <CartTotal/>
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
        )
    }
}
