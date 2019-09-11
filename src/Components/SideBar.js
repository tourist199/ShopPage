import React, { Component } from 'react'

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
      return <a key={index} href="/" onClick={(e)=>{return this.props.changeFilterCategory(e,item)}} className="list-group-item">{item}</a>
    })
  }
  render() {
    var listCate = this.filterCategory(this.props.listDT);
    return (
      <div className="col-lg-3">
        <h1 className="my-4">CodersX</h1>
        <div className="list-group">
          <a href="/" onClick={(e)=>{return this.props.changeFilterCategory(e,'')}} className="list-group-item">All</a>
          {this.showCategory(listCate)}
        </div>
      </div>
    )
  }
}
