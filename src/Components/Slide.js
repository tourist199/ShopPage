import React, { Component } from 'react'

export default class Slide extends Component {
    render() {
        return (
            <div id="carouselExampleIndicators" className="carousel slide my-4" data-ride="carousel">
                <ol className="carousel-indicators">
                  <li data-target="/carouselExampleIndicators" data-slide-to={0} className="active" />
                  <li data-target="/carouselExampleIndicators" data-slide-to={1} />
                  <li data-target="/carouselExampleIndicators" data-slide-to={2} />
                </ol>
                <div className="carousel-inner" style= {{height: '350px'}} role="listbox">
                  <div className="carousel-item active">
                    <img className="d-block img-fluid" src="https://hoanghamobile.com/tin-tuc/wp-content/uploads/2018/02/T2-T%E1%BA%BFt-Sale-t%E1%BB%95ng-fb-Ads-803x420.png" alt="First slide" />
                  </div>
                  <div className="carousel-item">
                    <img className="d-block img-fluid" src="http://thegioimobi.vn/wp-content/uploads/2017/09/b1.jpg" alt="Second slide" />
                  </div>
                  <div className="carousel-item">
                    <img className="d-block img-fluid" src="http://www.techone.vn/image/cache/data/thuy/anh-banner-qc/pk-mua-3-tang-1.png" alt="Third slide" />
                  </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true" />
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true" />
                  <span className="sr-only">Next</span>
                </a>
              </div>
              
        )
    }
}
