import React, { Component } from 'react'

export default class Cart extends Component {
    render() {
        return (
            <div classname="jumbotron">
                <h1 classname="display-3">Giỏ hàng</h1>
                <p classname="lead">Những sản phẩm đã mua</p>
                <hr classname="my-2" />
                <p>More info</p>
                <p classname="lead">
                    <a classname="btn btn-primary btn-lg" href="/" role="button">Jumbo action name</a>
                </p>
            </div>
        )
    }
}
