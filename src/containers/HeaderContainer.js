import React, { Component } from 'react';
import Header from '../Components/Header';
import { connect } from 'react-redux';

class HeaderContainer extends Component {
    render() {
        return (
            <Header listcart ={this.props.listCarts} />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        listCarts: state.listCarts
    }
}

export default connect (mapStateToProps) (HeaderContainer);