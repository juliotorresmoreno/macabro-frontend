

// @flow

import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Button } from 'reactstrap';
import { DefaultState, AuthState } from '../../store/state';
import { SignUpOpenForm, Redirect } from '../../actions/auth';

const mapState = (state: DefaultState) => ({
    auth: state.auth
})

interface ProductProps extends AuthState {
    dispatch: Dispatch
}

const Product = (props: ProductProps) => {
    const getStarted = () => {
        props.dispatch(Redirect("/subscription"));
        props.dispatch(SignUpOpenForm());
    }
    return (
        <div className="card-deck mb-3 text-center">
            <div className="card mb-4 shadow-sm">
                <div className="card-header">
                    <h4 className="my-0 font-weight-normal">Individual</h4>
                </div>
                <div className="card-body">
                    <h1 className="card-title pricing-card-title">
                        $20/<small className="text-muted">mes</small>
                    </h1>
                    <ul className="list-unstyled mt-3 mb-4">
                        <li>1 usuario incluido</li>
                        <li>5 GB</li>
                        <li>Soporte via email</li>
                        <li>Acceso a help center</li>
                    </ul>
                    <Button onClick={getStarted} color="primary" block className="btn-lg">
                        Empezar
                    </Button>
                </div>
            </div>
            <div className="card mb-4 shadow-sm">
                <div className="card-header">
                    <h4 className="my-0 font-weight-normal">Pequeña empresa</h4>
                </div>
                <div className="card-body">
                    <h1 className="card-title pricing-card-title">
                        $200/<small className="text-muted">mes</small>
                    </h1>
                    <ul className="list-unstyled mt-3 mb-4">
                        <li>20 usuarios incluido</li>
                        <li>20 GB</li>
                        <li>Soporte via email</li>
                        <li>Acceso a help center</li>
                    </ul>
                    <Button onClick={getStarted} color="primary" block className="btn-lg">
                        Empezar
                    </Button>
                </div>
            </div>
            <div className="card mb-4 shadow-sm">
                <div className="card-header">
                    <h4 className="my-0 font-weight-normal">Premium</h4>
                </div>
                <div className="card-body">
                    <h1 className="card-title pricing-card-title">
                        <small className="text-muted">Desde</small>&nbsp;
                        $500/<small className="text-muted">mes</small>
                    </h1>
                    <ul className="list-unstyled mt-3 mb-4">
                        <li>Desde 50 usuarios</li>
                        <li>Desde 50 GB</li>
                        <li>Soporte via email</li>
                        <li>Acceso a help center</li>
                    </ul>
                    <button type="button" className="btn btn-lg btn-block btn-primary">
                        Cotizar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default connect(mapState)(Product);
