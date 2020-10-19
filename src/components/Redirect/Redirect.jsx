
// @flow

import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Redirect as RedirectC } from 'react-router-dom';
import { DefaultState } from '../../store/state';
import * as auth from '../../actions/auth';

const mapProps = (state: DefaultState) => ({
    redirect: state.auth.redirect
});

interface RedirectProps {
    redirect: string,
    dispatch: Dispatch
}

const Redirect = (props: RedirectProps) => {
    if (props.redirect === '-')
        return false;
    props.dispatch(auth.Redirect('-'));
    return <RedirectC to={props.redirect} />
};

export default connect(mapProps)(Redirect);