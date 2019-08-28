import React, { Component } from 'react'

export default class Cart extends Component {
    render() {
        return (
            <div classname="jumbotron">
                <h1 classname="display-3">Giỏ hàng</h1>
                <p classname="lead">Những sản phẩm đã mua</p>
                <hr classname="my-2" />
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
                                <tr>
                                    <th scope="row">
                                        <img src="https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&amp;hei=445&amp;fmt=jpeg&amp;qlt=95&amp;op_sharpen=0&amp;resMode=bicub&amp;op_usm=0.5,0.5,0,0&amp;iccEmbed=0&amp;layer=comp&amp;.v=K7ik72" alt="" className="img-fluid z-depth-0"/>>
                                    </th>
                                    <td>
                                        <h5>
                                            <strong>Iphone 6 Plus</strong>
                                        </h5>
                                    </td>
                                    <td>15$</td>
                                    <td className="center-on-small-only">
                                        <span className="qty">1 </span>
                                        <div className="btn-group radio-group" data-toggle="buttons">
                                            <label className="btn btn-sm btn-primary
                                                btn-rounded waves-effect waves-light">
                                                <a>—</a>
                                            </label>
                                            <label className="btn btn-sm btn-primary
                                                btn-rounded waves-effect waves-light">
                                                <a>+</a>
                                            </label>
                                        </div>
                                    </td>
                                    <td>15$</td>
                                    <td>
                                        <button type="button" className="btn btn-sm btn-primary waves-effect waves-light" data-toggle="tooltip" data-placement="top" title="" data-original-title="Remove item">
                                            X
                                        </button>
                                    </td>
                                </tr>
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
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
        )
    }
}
