import React, {Component} from 'react';
import MenuListItem from '../menu-list-item';
import {connect} from 'react-redux';
import WithRestoService from '../hoc';
import {menuLoaded, menuRequested, menuError, addedToCart} from '../../actions';
import Spinner from '../spinner';
import Error from '../error';

import './menu-list.scss';

class MenuList extends Component {
    
    componentDidMount() {
        this.props.menuRequested();

        const {RestoService} = this.props;
        RestoService.getMenuItems()
            .then(res => {
                if (res === "server error") {
                    this.props.menuError()
                } else {this.props.menuLoaded(res)}
            });
    }
    render() {
        const {menuItems, loading, error, filter, addedToCart} = this.props
        
        if (error) {
            return <Error/>
        }
        if(loading) {
            return <Spinner/>
        }
        return (
            <ul className="menu__list">
                {
                    menuItems.map(menuItem => {
                        if (filter === 'all' || menuItem.category === filter) {
                            return <MenuListItem 
                                        key={menuItem.id} 
                                        menuItem={menuItem}
                                        onAddToCart={() => addedToCart(menuItem.id)}/>
                        } 
                    })
                }
            </ul>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        menuItems: state.menu,
        loading: state.loading,
        error: state.error,
        filter: state.filter
    }
}
const mapDispatchToProps = {
    menuLoaded,
    menuRequested,
    menuError,
    addedToCart
}

export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(MenuList));
