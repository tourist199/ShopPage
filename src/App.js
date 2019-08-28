import React, { Component } from "react";
import Header from "./Components/Header";
import SideBar from "./Components/SideBar";
import Slide from "./Components/Slide";
import Products from "./Components/Products";
import Footer from "./Components/Footer";
import Cart from "./Components/Cart";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listDT: [
        {
          id: 1,
          name: "Iphone 6 plus",
          price: 700,
          desc: "Điện thoại của Apple",
          image:
            "https://cdn.tgdd.vn/Products/Images/42/87846/iphone-6s-plus-32gb-400x460.png",
          star: 4
        },
        {
          id: 2,
          name: "Nokia 1202",
          price: 900,
          desc: "Điện thoại nokia ",
          image:
            "https://didongso.com.vn/wp-content/uploads/2018/09/nokia12-2.png",
          star: 5
        },
        {
          id: 3,
          name: "Iphone Xs max",
          price: 1700,
          desc: "Điện thoại mới nhất của Apple",
          image:
            "https://cdn.tgdd.vn/Products/Images/42/190321/iphone-xs-max-gold-400x460.png",
          star: 5
        },
        {
          id: 4,
          name: "Fmobile T12",
          price: 700,
          desc: "Điện thoại của FMobile",
          image:
            "https://img.websosanh.vn/v2/users/dclimg/images/ufdrie60ez77o.jpg",
          star: 3
        },
        {
          id: 5,
          name: "Vinsmart Joy1",
          price: 700,
          desc: "Điện thoại của Vin",
          image:
            "https://cdn.fptshop.com.vn/Uploads/Originals/2018/12/11/636801240961123743_vsmart-joy1-plus-den-1.png",
          star: 4
        }
      ],
      listCart: []
    };
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

  onDelete = item => {
    let listCartItem = this.state.listCart;
    listCartItem = listCartItem.filter(x => x.id !== item.id);
    this.setState({
      listCart: listCartItem
    });
  };

  render() {
    return (
      <div>
        <div>
          <Header />
          <div className="container">
            <div className="row">
              <SideBar />
              <div className="col-lg-9">
                <Slide />
                <Products
                  products={this.state.listDT}
                  addToCart={this.addToCart}
                />
              </div>
            </div>
            <Cart
              carts={this.state.listCart}
              onChangeQuality={this.onChangeQuality}
              onDelete={this.onDelete}
            />
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
