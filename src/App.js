import React, { Component } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Sliders from "./components/Sliders";
import Products from "./components/Products";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listProduct: [
        {
          id: 1,
          name: "Iphone 6",
          price: 6000000,
          desc: "Điện thoại iphone 6",
          image:
            "https://salt.tikicdn.com/cache/w1200/ts/product/31/71/dd/4ee9964b205cdf0d28d3647d7b43e346.jpg",
          star: 4
        },
        {
          id: 2,
          name: "Samsung Galaxy S9",
          price: 7000000,
          desc: "Điện thoại Samsung Galaxy S9",
          image:
            "https://salt.tikicdn.com/cache/w1200/ts/product/7d/3b/bc/30834d8c24857f7d0af042445cf80ae5.jpg",
          star: 3
        },
        {
          id: 3,
          name: "HTC 11",
          price: 8000000,
          desc: "Điện thoại HTC 11",
          image:
            "http://bizweb.dktcdn.net/thumb/1024x1024/100/168/366/products/u2.jpg",
          star: 4
        },
        {
          id: 4,
          name: "Iphone 7 Plus",
          price: 9500000,
          desc: "Điện thoại iphone 7 Plus",
          image:
            "https://salt.tikicdn.com/cache/550x550/ts/product/c9/b2/cd/aebad5d0b2488c080e0c6d2a4a36c3c3.jpg",
          star: 5
        },
        {
          id: 5,
          name: "Samsung Galaxy S10",
          price: 10500000,
          desc: "Điện thoại Samsung Galaxy S10",
          image:
            "https://salt.tikicdn.com/cache/w1200/ts/product/79/37/73/9bb706e424c30d6cc3f004d46adc5105.jpg",
          star: 3
        },
        {
          id: 1,
          name: "HTC 10",
          price: 1200000,
          desc: "Điện thoại HTC 10",
          image:
            "https://shopdidong.vn/profiles/shopdidongvn/uploads/attach/1552589718_htc10.jpg",
          star: 2
        }
      ]
    };
  }
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <div className="row">
            <Sidebar />
            <div className="col-lg-9">
              <Sliders />
              <Products products={this.state.listProduct} />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
