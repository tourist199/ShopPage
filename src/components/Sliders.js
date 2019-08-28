import React, { Component } from "react";

export default class Sliders extends Component {
  render() {
    let sliders = this.props.sliders;
    let slider = sliders.map((s, index) => {
      return (
        <div className="carousel-item" key={index}>
          <img className="d-block img-fluid" src={s.image} alt={s.name} />
        </div>
      );
    });
    return (
      <div
        id="carouselExampleIndicators"
        className="carousel slide my-4"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to={0}
            className="active"
          />
          <li data-target="#carouselExampleIndicators" data-slide-to={1} />
          <li data-target="#carouselExampleIndicators" data-slide-to={2} />
        </ol>
        <div className="carousel-inner" role="listbox">
          <div className="carousel-item active">
            <img
              className="d-block img-fluid"
              src="http://placehold.it/900x350"
              alt="First slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block img-fluid"
              src="http://placehold.it/900x350"
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block img-fluid"
              src="http://placehold.it/900x350"
              alt="Third slide"
            />
          </div>
          {slider}
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  }
}
