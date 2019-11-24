import React, { Component } from 'react';
import SideBar from '../Components/SideBar';
import { connect } from 'react-redux';
import {actChangeFilterCategory} from './../actions'

class SideBarContainer extends Component {
    render() {
        console.log('====================================');
        console.log(this.props.filterCategory);
        console.log('====================================');
        return (
            <SideBar 
                listDT = {this.props.listProducts} 
                changeFilterCategory={this.props.changeFilterCategory} 
                filterCategory={this.props.filterCategory}  
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        listProducts: state.listProducts,
        filterCategory : state.filterCategory
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeFilterCategory: (filter) => {
            console.log('====================================');
            console.log(filter);
            console.log('====================================');
            dispatch(actChangeFilterCategory(filter))
        }
    }
}

export default connect (mapStateToProps,mapDispatchToProps) (SideBarContainer);