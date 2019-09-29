import React, { Component } from 'react'

export default class SideBar extends Component {
    filterCategory = (list) =>{
      var listCategory =[]
      for(var i=0;i<list.length;i++){
        if(listCategory.indexOf(list[i].category)<0)
        listCategory.push(list[i].category)
      }
      return listCategory;
    }
    //chặn load trang
    onClick=(event)=>{
      event.preventDefault();
      this.props.changeFilterCategory(event.target.name)
    }
    showCategory=(listCate) =>{
      return listCate.map((item,index)=>{
        return <a href="/" 
          key={index} 
          name={item} 
          // className="list-group-item active" 
          onClick={this.onClick}
          className={this.props.filterCategory===item?"list-group-item active" : "list-group-item "  }
          >
          {item}
          </a>
      })
    }
    render() {
      console.log(this.props.filterCategory);
      
        return (
            <div className="col-lg-3">
              <h1 className="my-4">Shop Name</h1>
              <div className="list-group">
                <a href='/' name='' className={this.props.filterCategory?"list-group-item ":"list-group-item active "  } onClick={this.onClick} >Trang chủ</a>
                {this.showCategory(this.filterCategory(this.props.list))}
              </div>
            </div>
        )
    }
}
