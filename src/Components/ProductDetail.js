import React, { Component } from 'react'

export default class ProductDetail extends Component {

    showStar = (star) => {
        var rs = ''
        for (var i = 0; i < 5; i++)
            if (i < star)
                rs += '★ ';
            else
                rs += '☆ ';
        return rs;
    }

    onAddToCart = (product) => {
        this.props.addToCart({ ...product, quantity: 1 })
    }
    render() {
        let id = this.props.match.params.id_product;
        console.log(this.props.listDT);
        let productItem =  this.props.listDT.find((item) => {
            return item.id === +id;
        })
        console.log(productItem);
        
        return (
            <div>
                <section className="page-section jumbotron" id="contact">
                    <div className="container">
                        {/* Contact Section Heading */}
                        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Chi tiết sản phẩm</h2>
                        {/* Icon Divider */}
                        <div className="divider-custom">
                            <div className="divider-custom-line" />
                            <div className="divider-custom-icon">
                                <i className="fas fa-star" />
                            </div>
                            <div className="divider-custom-line" />
                        </div>
                        {/* Contact Section Form */}
                        <div className="row">
                            <div className="card h-100 col-11" style={{ margin: '0 auto',paddingTop: '100px' }}>
                                <div className="col-6" style={{ margin: '0 auto' }}><img width="50%" className="card-img-top" src={productItem.image} alt="" /></div>
                                <div className="card-body">
                                    <h4 className="card-title">
                                        <a href="/">{productItem.name}</a>
                                    </h4>
                                    <h5>$ {productItem.price}</h5>
                                    <p className="card-text">{productItem.description}</p>
                                </div>
                                <div className="card-footer box-flex" >
                                    <p style={{ color: '#f1c40f' }}>{this.showStar(productItem.star)}</p>
                                    <div className="btn btn-danger btn-muahang" onClick={() => this.onAddToCart(productItem)}>Mua hàng</div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
