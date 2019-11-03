import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class SideBar extends Component {
  showListCat = cat => {
    if (cat.length > 0) {
      return cat.map((item, index) => {
        return (
          <Link
            key={index}
            to="/"
            onClick={() => this.onClick(item)}
            className={
              this.props.filterCat === item
                ? "list-group-item active"
                : "list-group-item"
            }
          >
            {item}
          </Link>
        );
      });
    }
  };

  onClick = item => {
    this.props.changeFilterCat(item);
  };
  render() {
    return (
      <div className="col-lg-3">
        <h1 className="my-4">Shop Name</h1>
        <div className="list-group">
          <Link
            className={
              this.props.filterCat === ""
                ? "list-group-item active"
                : "list-group-item"
            }
            href="/"
            onClick={() => this.onClick("")}
          >
            All
          </Link>
          {this.showListCat(this.props.category)}
        </div>
      </div>
    );
  }
}
