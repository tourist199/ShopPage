import React, { Component } from 'react'
import './Pagination.css';


export default class Pagination extends Component {
    showPages = (totalPage,activePage)=>{
        console.log(totalPage);
        
        let rs = [];
        for(let i=0;i<totalPage;i++){
            rs.push(
                <a  
                    key={i}
                    href="/" 
                    onClick={(e)=>this.props.onChangePage(e,i)} 
                    className={activePage==i?"active":null}
                >
                    {i+1}
                </a>
            )
        }
        return (
            <div class="pagination">
                <a href="/" onClick={(e)=>this.props.onChangePageUpDown(e,-1,totalPage)} >&laquo;</a>
                {rs}
                <a href="/" onClick={(e)=>this.props.onChangePageUpDown(e,+1,totalPage)} >&raquo;</a>
            </div>
        )
    }
    render() {
        let {totalItems,activePage,pageRangeDisplayed} = this.props;
        console.log(this.props);
        
        let totalPage = Math.ceil(totalItems/pageRangeDisplayed);
        let rs = this.showPages(totalPage,activePage);
        return (
            <div style={{width:"100%", textAlign:"center"}}>
                {rs}
            </div>
        )
        
    }
}
