import React, { Component } from 'react'

export default class Services extends Component {
    render() {
        return (
            <section className="page-section bg-primary text-white mb-0 jumbotron" id="about" >
                    <div className="container">
                        {/* About Section Heading */}
                        <h2 className="page-section-heading text-center text-uppercase text-white">Services</h2>
                        {/* Icon Divider */}
                        <div className="divider-custom divider-light">
                            <div className="divider-custom-line" />
                            <div className="divider-custom-icon">
                                <i className="fas fa-star" />
                            </div>
                            <div className="divider-custom-line" />
                        </div>
                        {/* About Section Content */}
                        <div className="row">
                            <div className="col-lg-4 ml-auto">
                                <p className="lead">Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                            </div>
                            <div className="col-lg-4 mr-auto">
                                <p className="lead">You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
                            </div>
                        </div>
                        {/* About Section Button */}
                        <div className="text-center mt-4">
                            <a className="btn btn-xl btn-outline-light" href="https://startbootstrap.com/themes/freelancer/">
                                <i className="fas fa-download mr-2" />
                                Free Download!
        </a>
                        </div>
                    </div>
                </section>
        )
    }
}
