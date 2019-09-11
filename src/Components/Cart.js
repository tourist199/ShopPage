import React, { Component } from 'react'
import CartTotal from './CartTotal'
import CartItem from './CartItem'

export default class Cart extends Component {

    showListCarts = (list)=> {
        return list.map((item,index)=>{
            return <CartItem changeQuantity={this.props.changeQuantity} key={index} item={item} onDelete={this.props.onDelete}/>
        })
    }
    amount = (list)=>{
        var total = 0;
        // list.map((item)=>{
        //     total+=item.price * item.quantity;
        //     return item;
        // })

        for (var i=0;i<list.length;i++){
            total += list[i].price*list[i].quantity;
        }
        return total;
    }
    render() {
        // var listcart = this.props.listcart;
        var {listcart} = this.props;
        

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
                                {this.showListCarts(listcart)}
                                <CartTotal total = {this.amount(listcart)} />
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
        )
    }
}
