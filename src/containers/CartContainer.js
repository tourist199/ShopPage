import React, { Component } from 'react'
import Cart from '../Components/Cart'
import { connect } from 'react-redux';


class CartContainer extends Component {

    changeQuantity = (item,value)=> {
        var list = this.state.ListCart;
        var index = list.find((x)=>x.id===item.id);
        index.quantity += value;
        if (index.quantity===0)
          list.splice(list.indexOf(index),1);
        this.setState({
          ListCart : list
        })
    }

    render() {
        return (
            <div>
                <Cart listcart = {this.props.listCarts} changeQuantity={this.changeQuantity} onDelete={this.onDelete}/>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        listCarts: state.listCarts
    }
}
export default connect(mapStateToProps) (CartContainer)