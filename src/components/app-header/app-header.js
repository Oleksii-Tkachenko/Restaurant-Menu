import React from 'react';
import cartIcon from './shopping-cart-solid.svg';
import {menuFilter} from '../../actions';
import pizza from './pizza.svg';
import salad from './salad.svg';
import meat from './meat.svg';
import {Link} from 'react-router-dom';
import './app-header.scss';
import store from '../../store';
import {connect} from 'react-redux';


const AppHeader = ({totalPrice}) => {
    const onFilterMenu = (category) => {
        store.dispatch(menuFilter(category))
    }
    
    console.log(totalPrice)
    
    return (
        <header className="header">
            <div className="header__icons">
                <button onClick={()=>onFilterMenu('pizza')} className="btn"><img className="header__pizza" src={pizza} alt="pizza"></img></button>
                <button onClick={()=>onFilterMenu('salads')} className="btn"><img className="header__salad" src={salad} alt="salad"></img></button>
                <button onClick={()=>onFilterMenu('meat')} className="btn"><img className="header__meat" src={meat} alt="meat"></img></button>
            </div>
            <div className="header__links">
                <Link onClick={()=>onFilterMenu('all')} className="header__link" to="/menu/">
                    Menu
                </Link>
                <Link className="header__link" to="/total/">
                    <img className="header__cart" src={cartIcon} alt="cart"></img>
                    Total: {totalPrice} $
                </Link>
            </div>
            
        </header>
    )
};

const mapStateToProps = ({totalPrice}) => {
    return {
        totalPrice
    }
}


export default connect(mapStateToProps)(AppHeader);