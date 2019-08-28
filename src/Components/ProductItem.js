import React, { Component } from 'react'

export default class ProductItem extends Component {
    showStar = (star)=> {
        var rs = ''
        for (var i=0;i<5;i++)
            if (i<star)
                rs+='★ ';
            else
                rs+= '☆ ';
        return rs;
    }
    render() {
        var product = this.props.item;
        return (
            <div className="col-lg-4 col-md-6 mb-4">
                  <div className="card h-100">
                    <a href="/"><img className="card-img-top" src={product.image} alt="" /></a>
                    <div className="card-body">
                      <h4 className="card-title">
                        <a href="/">{product.name}</a>
                      </h4>
                      <h5>$ {product.price}</h5>
                      <p className="card-text">{product.desc}</p>
                    </div>
                    <div className="card-footer box-flex" >
                      <p  style = {{color : '#f1c40f'}}>{this.showStar(product.star)}</p>
                      <div className = "btn btn-danger btn-muahang">Mua hàng</div>
                    </div>
                    
                  </div>
                </div>
                
        )
    }
}
