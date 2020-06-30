import React from 'react';
import cartIcon from './shopping-cart-solid.svg';
import pizza from './pizza.svg';
import salad from './salad.svg';
import meat from './meat.svg';
import {Link} from 'react-router-dom';
import './app-header.scss';


const AppHeader = ({total}) => {
    const onFilterMenu = (category) => {
        console.log(category)
    }
    return (
        <header className="header">
            <div className="header__icons">
                <button onClick={()=>onFilterMenu('pizza')} className="btn"><img className="header__pizza" src={pizza} alt="pizza"></img></button>
                <button onClick={()=>onFilterMenu('salad')} className="btn"><img className="header__salad" src={salad} alt="salad"></img></button>
                <button onClick={()=>onFilterMenu('meat')} className="btn"><img className="header__meat" src={meat} alt="meat"></img></button>
            </div>
            <div className="header__links">
                <Link className="header__link" to="/menu/">
                    Menu
                </Link>
                <Link className="header__link" to="/total/">
                    <img className="header__cart" src={cartIcon} alt="cart"></img>
                    Total: {total} $
                </Link>
            </div>
            
        </header>
    )
};

// console.log(state)

export default AppHeader;

// const mapStateToProps = (state) => {
//     return {
//         menuItems: state.menu,
//         loading: state.loading,
//         error: state.error
//     }
// }
// const mapDispatchToProps = {
//     menuLoaded,
//     menuRequested,
//     menuError
// }

// export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(MenuList));