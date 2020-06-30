import React, {Component} from 'react';
import MenuListItem from '../menu-list-item';
import {connect} from 'react-redux';
import WithRestoService from '../hoc';
import {menuLoaded, menuRequested, menuError} from '../../actions';
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
    onFilterMenu(category) {
        console.log(1);
    }

    render() {
        const {menuItems, loading, error, filter} = this.props
        
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
                            return <MenuListItem key={menuItem.id} menuItem={menuItem}/>
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
    menuError
}

export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(MenuList));
