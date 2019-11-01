import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="footer text-center" 
                    style={{marginTop:'30px'}}> {/* margin top 30px for nice */}
                    <div className="container">
                        <div className="row">
                            {/* Footer Location */}
                            <div className="col-lg-4 mb-5 mb-lg-0">
                                <h4 className="text-uppercase mb-4">Location</h4>
                                <p className="lead mb-0">2215 John Daniel Drive
                                    <br />Clark, MO 65243
                                </p>
                            </div>
                            {/* Footer Social Icons */}
                            <div className="col-lg-4 mb-5 mb-lg-0">
                                <h4 className="text-uppercase mb-4">Around the Web</h4>
                                <a className="btn btn-outline-light btn-social mx-1" href="/">
                                    <i className="fab fa-fw fa-facebook-f" />
                                </a>
                                <a className="btn btn-outline-light btn-social mx-1" href="/">
                                    <i className="fab fa-fw fa-twitter" />
                                </a>
                                <a className="btn btn-outline-light btn-social mx-1" href="/">
                                    <i className="fab fa-fw fa-linkedin-in" />
                                </a>
                                <a className="btn btn-outline-light btn-social mx-1" href="/">
                                    <i className="fab fa-fw fa-dribbble" />
                                </a>
                            </div>
                            {/* Footer About Text */}
                            <div className="col-lg-4">
                                <h4 className="text-uppercase mb-4">About Freelancer</h4>
                                <p className="lead mb-0">Freelance is a free to use, MIT licensed Bootstrap theme created by
            <a href="http://startbootstrap.com">Start Bootstrap</a>.</p>
                            </div>
                        </div>
                    </div>
                </footer>
                <footer className="py-5 bg-dark">
                    <div className="container">
                        <p className="m-0 text-center text-white">Copyright © Your Website 2019</p>
                    </div>
                    {/* /.container */}
                </footer>
            </div>

        )
    }
}
