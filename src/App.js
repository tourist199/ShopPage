import React, { Component } from 'react';
import Header from './Components/Header';
import SideBar from './Components/SideBar';
import Slide from './Components/Slide';
import Footer from './Components/Footer';
import './App.css';
import router from './router';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ProductsContainer from './containers/ProductsContainer';
import SideBarContainer from './containers/SideBarContainer';
import CartContainer from './containers/CartContainer';
import ProductDetailContainer from './containers/ProductDetailContainer';
import HeaderContainer from './containers/HeaderContainer';


class App extends Component {

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
            <HeaderContainer />

            <div className="container">
              <div className="row">
                <SideBarContainer />
                <div className="col-lg-9">
                  <Slide />
                  <Switch>
                    <Route path="/" exact component={()=><ProductsContainer  />}/>
                    <Route path="/cart" component={()=><CartContainer />} />
                    <Route path="/product-detail/:id_product" component={({match,history})=><ProductDetailContainer match = {match} history = {history} />} />
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