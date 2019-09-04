import React, { Component } from "react";

export default class SideBar extends Component {
  render() {
    return (
      <div className="col-lg-3">
        <h1 className="my-4">Shop Name</h1>
        <div className="list-group">
          <a href="/" className="list-group-item">
            Iphone
          </a>
          <a href="/" className="list-group-item">
            Nokia
          </a>
          <a href="/" className="list-group-item">
            Sam sung
          </a>
        </div>
      </div>
    );
  }
}
