import React from 'react';
import './app.scss';
import {MainPage, CartPage} from '../pages';
import AppHeader from '../app-header';
import {Route, Switch} from 'react-router-dom';
import Background from './food-bg.jpg';


const App = () => {
    return (
        <div style={{background: `url(${Background}) center center/cover no-repeat`}} className="app">
            <AppHeader total={50}/>
                <Switch>
                    <Route path='/' exact component={MainPage}/>
                    <Route path='/total' exact component={CartPage}/>
                    <Route exact component={MainPage}/>
                </Switch>
        </div>
    )
}

export default App;