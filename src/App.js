import React, { Component } from 'react';
import Header from './Components/Header';
import SideBar from './Components/SideBar';
import Slide from './Components/Slide';
import Products from './Components/Products';
import Footer from './Components/Footer';
import Cart from './Components/Cart';
import './App.css';
import router from './router';
import { BrowserRouter as Router, Route, Link,Switch } from 'react-router-dom'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      listDT: [
        {
          id: 1,
          category:'Apple',
          name: 'Iphone 6 plus',
          price: 700,
          desc: 'Điện thoại của Apple',
          image:'https://cdn.tgdd.vn/Products/Images/42/87846/iphone-6s-plus-32gb-400x460.png',
          star : 4
        },
        {
          id: 2,
          category:'Nokia',
          name: 'Nokia 1202',
          price: 900,
          desc: 'Điện thoại nokia ',
          image: 'https://didongso.com.vn/wp-content/uploads/2018/09/nokia12-2.png',
          star: 5
        },
        {
          id: 3,
          category:'Apple',
          name: 'Iphone Xs max',
          price: 1700,
          desc: 'Điện thoại mới nhất của Apple',
          image:'https://cdn.tgdd.vn/Products/Images/42/190321/iphone-xs-max-gold-400x460.png',
          star : 5
        },
        {
          id: 4,
          category:'Fmobile',
          name: 'Fmobile T12',
          price: 700,
          desc: 'Điện thoại của FMobile',
          image:'https://img.websosanh.vn/v2/users/dclimg/images/ufdrie60ez77o.jpg',
          star:3
        },
        {
          id: 5,
          category:'Vinsmart',
          name: 'Vinsmart Joy1',
          price: 700,
          desc: 'Điện thoại của Vin',
          image: 'https://cdn.fptshop.com.vn/Uploads/Originals/2018/12/11/636801240961123743_vsmart-joy1-plus-den-1.png',
          star:4
        },
        {
          id: 6,
          category:'Samsung',
          name: 'samsung galaxy s10',
          price: 2000,
          desc: 'Điện thoại của Samsung',
          image: 'https://static.bhphoto.com/images/images500x500/samsung_sm_g973uzbaxaa_galaxy_s10_sm_g973u_128gb_1550829635_1456401.jpg',
          star:5
        },
        {
          id: 7,
          category:'Samsung',
          name: 'samsung galaxy a70 2018',
          price: 50,
          desc: 'Điện thoại của Samsung',
          image: 'https://cdn.fptshop.com.vn/Uploads/Originals/2019/4/13/636907475981220637_samsung-galaxy-a70-den-1.png',
          star:5
        }
        
      ],
      ListCart : [
        {
          id: 5,
          name: 'Vinsmart Joy1',
          price: 700,
          desc: 'Điện thoại của Vin',
          image: 'https://cdn.fptshop.com.vn/Uploads/Originals/2018/12/11/636801240961123743_vsmart-joy1-plus-den-1.png',
          star:4,
          quantity: 2
        },{
          id: 4,
          name: 'Fmobile T12',
          price: 700,
          desc: 'Điện thoại của FMobile',
          image:'https://img.websosanh.vn/v2/users/dclimg/images/ufdrie60ez77o.jpg',
          star:3,
          quantity: 5
        }
      ],
      filterCategory : ''
    
    }
  }

  addToCart = (item)=>{
    var list = this.state.ListCart; //listcart
    var index = list.find((x)=>x.id===item.id); //tim đã có trong list cart chưa? nếu có thì trả về item đó, khong có thì trả về rỗng
    if (index){ // trường hợp có
      index.quantity+=1;
    }else{ //trường hợp 
      list.push(item);
    }

    this.setState({
      ListCart : list
    })
  }
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
  onDelete = (item) => {
    var list = this.state.ListCart;
    var index = list.find((x)=>x.id===item.id);
    list.splice(list.indexOf(index),1);
    this.setState({
      ListCart : list
    })
  }
  filterProducts = (list,filter)=>{
    if (filter==='')
      return list;
    return list.filter((x)=>x.category===filter);
  }
  changeFilterCategory = (e,filter)=>{
    this.setState({filterCategory:filter})
  }


  showRoutes = (routers)=>{
    return routers.map((item,index)=>{
      return <Route key={index} path={item.path} exact={item.exact} component={item.main} />
    })

  }
  render() {
    
    return (
      <div >
        <Router>
          <div>
            <Header listcart ={this.state.ListCart} />
            <div className="container">
              <div className="row">
                <SideBar listDT = {this.state.listDT} changeFilterCategory={this.changeFilterCategory} filterCategory={this.state.filterCategory}  />
                <div className="col-lg-9">
                  <Slide />
                  <Switch>
                    <Route path="/" exact component={()=><Products  products = {this.filterProducts(this.state.listDT,this.state.filterCategory)} addToCart = {this.addToCart}  />}/>
                    <Route path="/cart" component={()=><Cart listcart = {this.state.ListCart} changeQuantity={this.changeQuantity} onDelete={this.onDelete}/>} />
                    {this.showRoutes(router)}
                  </Switch>
                </div>
              </div>
              
            </div>
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
