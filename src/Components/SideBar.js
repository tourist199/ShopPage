import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class SideBar extends Component {
  filterCategory = (list) => {
    var listCategory = [];
    for (var i = 0; i < list.length; i++) {
      if (listCategory.indexOf(list[i].category)<0){
        listCategory.push(list[i].category)
      }
    }
    return listCategory;
  }
  
  showCategory = (listCate)=>{
    return listCate.map((item,index)=>{
      return <Link key={index} to='/'
      onClick={(e)=>{return this.props.changeFilterCategory(item)}} 
      className={this.props.filterCategory===item?`list-group-item active`:`list-group-item`}
      >
        {item}
      </Link>
    })
  }

  render() {
    var listCate = this.filterCategory(this.props.listDT);
    return (
      <div className="col-lg-3">
        <h1 className="my-4">CodersX</h1>
        <div className="list-group"> 
          <Link to="/" 
            onClick={(e)=>{return this.props.changeFilterCategory('')}} 
            className={this.props.filterCategory?`list-group-item`:`list-group-item active`} 
          >
            All
          </Link>
          {this.showCategory(listCate)}
        </div>
      </div>
    )
  }
}
