import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch } from 'react-router-dom';
import Home from '../../pages/Home';
import Auth from '../../pages/Auth';
import './App.css';
import store from '../../store';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <PrivateRoute path="/" component={Home} unauthorizedComponent={Auth} />
                </Switch>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
