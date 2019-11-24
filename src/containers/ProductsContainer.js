import React, { Component } from 'react'
import Products from './../Components/Products'
import { connect } from 'react-redux';
import {actAddToCart} from './../actions'

class ProductsContainer extends Component {

  // addToCart = (item) => {
  //   var list = this.state.ListCart; //listcart
  //   var index = list.find((x) => x.id === item.id); //tim đã có trong list cart chưa? nếu có thì trả về item đó, khong có thì trả về rỗng
  //   if (index) { // trường hợp có
  //     index.quantity += 1;
  //   } else { //trường hợp 
  //     list.push(item);
  //   }
  //   this.setState({
  //     ListCart: list
  //   })
  // }

  filterProducts = (list, filter) => {
    if (filter === '')
      return list;
    return list.filter((x) => x.category === filter);
  }

  render() {
    return (
      <div>
        <Products addToCart={this.props.addToCart} products={this.filterProducts(this.props.listProducts, this.props.filterCategory)} />
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    filterCategory: state.filterCategory,
    listProducts: state.listProducts
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (item) => {
      dispatch(actAddToCart(item))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer)
