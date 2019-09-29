import React, { Component } from "react";
import Header from "./Components/Header";
import SideBar from "./Components/SideBar";
import Slide from "./Components/Slide";
import Products from "./Components/Products";
import Footer from "./Components/Footer";
import Cart from "./Components/Cart";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listDT: [
        {
          id: 1,
          category: "Iphone",
          name: "Iphone 6 plus",
          price: 700,
          desc: "Điện thoại của Apple",
          image:"https://cdn.tgdd.vn/Products/Images/42/87846/iphone-6s-plus-32gb-400x460.png",
          star: 4
        },
        {
          id: 2,
          category: "Nokia",
          name: "Nokia 1202",
          price: 900,
          desc: "Điện thoại nokia ",
          image:"https://didongso.com.vn/wp-content/uploads/2018/09/nokia12-2.png",
          star: 5
        },
        {
          id: 3,
          category: "Samsung",
          name: "Samsung S10 Plus",
          price: 1700,
          desc: "Điện thoại mới nhất của Apple",
          image:"https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/6/3/636863659522918468_ss-galaxy-s10-plus-xanh-1.png",
          star: 5
        },
        {
          id: 4,
          category: "Fmobile",
          name: "Fmobile T12",
          price: 700,
          desc: "Điện thoại của FMobile",
          image:"https://img.websosanh.vn/v2/users/dclimg/images/ufdrie60ez77o.jpg",
          star: 3
        },
        {
          id: 5,
          category: "Vinsmart",
          name: "Vinsmart Joy1",
          price: 700,
          desc: "Điện thoại của Vin",
          image:"https://cdn.fptshop.com.vn/Uploads/Originals/2018/12/11/636801240961123743_vsmart-joy1-plus-den-1.png",
          star: 4
        }
      ],
      listCart: [],
      filterCategory: ''
    }
  }
  addToCart = item => {
    let listCartItem = this.state.listCart;
    let index = listCartItem.find(x => x.id === item.id);
    if (index) {
      index.quality += 1;
    } else {
      listCartItem.push(item);
    }
    this.setState({
      listCart: listCartItem
    });
  };

  onChangeQuality = (item, val) => {
    let listCartItem = this.state.listCart;
    let index = listCartItem.find(x => x.id === item.id);
    index.quality += val;

    if (index.quality === 0) {
      listCartItem = listCartItem.filter(x => x.id !== item.id);
    }
    this.setState({
      listCart: listCartItem
    });
  };

  onDelete = (item) => {
    let listCartItem = this.state.listCart;
    listCartItem = listCartItem.filter(x => x.id !== item.id);
    this.setState({
      listCart: listCartItem
    });
  };
  filterProduct =(list,filter)=>{
    if(filter==='')
      return list
    return list.filter((x)=>x.category===filter)
  }
  changeFilterCategory =(filter)=>{
    this.setState({filterCategory:filter})
  }
  render() {
    return (
      <Router>
        <div>
          <Header cart={this.state.listCart}/>
          <div className="container">
            <div className="row">
              <SideBar list={this.state.listDT} changeFilterCategory={this.changeFilterCategory} filterCategory={this.state.filterCategory}/>
              <div className="col-lg-9">
                <Slide />
                <Route path='/' exact component={()=><Products
                  products={this.filterProduct(this.state.listDT,this.state.filterCategory)}
                  addToCart={this.addToCart}
                />}
                />
                
              </div>
            </div>
            <Route path='/cart' component={()=><Cart
                carts={this.state.listCart}
                onChangeQuality={this.onChangeQuality}
                onDelete={this.onDelete}
              />} 
            />
          </div>
          <Footer />
        </div>
      </Router>  
    );
  }
}

export default App;
