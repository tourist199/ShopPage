import React, { Component } from 'react'
import Cart from '../Components/Cart'
import { connect } from 'react-redux';
import {actDeleteCartItem,actChangeQuantityCartItem} from './../actions'


class CartContainer extends Component {

    changeQuantity = (item,value)=> {
        this.props.changeQuantityCartItem(item,value)
        // var list = this.state.ListCart;
        // var index = list.find((x)=>x.id===item.id);
        // index.quantity += value;
        // if (index.quantity===0)
        //   list.splice(list.indexOf(index),1);
        // this.setState({
        //   ListCart : list
        // })
    }

    onDelete = (item) => {
        this.props.deleteCartItem(item)
        
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
const mapDispatchToProps = (dispatch) => {
    return {
        deleteCartItem: (item) => {
            dispatch(actDeleteCartItem(item))
        },
        changeQuantityCartItem: (item, value)=> {
            dispatch(actChangeQuantityCartItem(item,value))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (CartContainer)