
// @flow

import React from "react";
import { Route, RouteProps } from "react-router-dom";
import { connect } from 'react-redux';
import { DefaultState, AuthState } from '../../store/state';

interface PrivateRouteProps extends RouteProps {
    auth: AuthState,
    unauthorizedComponent: React.JSXElementConstructor
}

const mapProps = (state: DefaultState) => ({
    auth: state.auth.auth
});

const PrivateRoute: React.FC<PrivateRouteProps> = (props) => {
    if (!props.auth) {
        return (
            <props.unauthorizedComponent />
        );
    }
    return (
        <Route {...props} />
    );
}

export default connect(mapProps)(PrivateRoute);