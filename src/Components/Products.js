import React, { Component } from 'react'
import ProductItem from './ProductItem'
import Pagination from './Pagination'
export default class Products extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            activePage : 0,
            pageRangeDisplayed: 6
        }
    }
    showProducts = (products,pageCurrent) => {
        let head = pageCurrent * this.state.pageRangeDisplayed;
        let tail = head + this.state.pageRangeDisplayed;
        if (products)
            return products.slice(head,tail).map((item, index)=>{
                return <ProductItem addToCart={this.props.addToCart} item = {item} key = {index} />
            })
    }
    onChangePage = (e,numPage)=>{
        e.preventDefault();
        this.setState({activePage:numPage})
    }
    onChangePageUpDown = (e,num,totalPage)=>{
        e.preventDefault();
        var temp = this.state.activePage+num;
        if (temp>=0&&temp<totalPage)
            this.setState({activePage:temp})
    }
    

    render() {
        var products = this.props.products;
        return (
            <div className="row">
                {this.showProducts(products,this.state.activePage)}
                <Pagination 
                    activePage = {this.state.activePage} 
                    totalItems = {products.length}
                    onChangePage   = {this.onChangePage}
                    onChangePageUpDown = {this.onChangePageUpDown}
                    pageRangeDisplayed = {this.state.pageRangeDisplayed}
                />
            </div>
        )
    }
}
