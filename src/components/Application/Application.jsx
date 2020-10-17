import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route, Redirect as RedirectC } from 'react-router-dom';
import Landing from '../../pages/Landing';
import Terms from '../../pages/Terms';
import Services from '../../pages/Services';
import Privacy from '../../pages/Privacy';
import Profile from '../../pages/Profile';
import NotFound from '../../pages/NotFound';
import store from '../../store';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import Redirect from '../Redirect';
import { DefaultState } from '../../store/state';
import LoadData from '../LoadData/LoadData';

const RProfile = () => {
    const state: DefaultState = store.getState();
    if (state.auth)
        return <RedirectC to='/profile' />
    return <NotFound />;
}

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Redirect />
                <LoadData />
                <Switch>
                    <Route path="/privacy" component={Privacy} exact />
                    <Route path="/terms" component={Terms} exact />

                    <PrivateRoute path="/profile"
                        unauthorizedComponent={Landing}
                        component={Profile} exact={false} />
                    <PrivateRoute path="/services"
                        unauthorizedComponent={Landing}
                        component={Services} exact={false} />

                    <PrivateRoute path="/"
                        unauthorizedComponent={Landing}
                        component={RProfile} />
                </Switch>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
