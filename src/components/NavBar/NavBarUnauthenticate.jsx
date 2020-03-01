
// @flow

import React, { useState, Fragment, CSSProperties } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem
} from 'reactstrap';
import { Link } from 'react-router-dom';
import Auth from '../Auth';
import { connect } from 'react-redux';
import { DefaultState } from '../../store/state';
import { authTypes } from '../../actions/actionTypes';
import { SignInOpenForm, SignUpOpenForm, CloseForm } from '../../actions/auth';
import { Dispatch } from 'redux';

const logoSrc = '//eclosionit.com/wp-content/themes/eclosiontheme/img/information-technologyitEclosion%C2%AE.png';

const logoStyle: CSSProperties = {
    maxHeight: 30
}

const mapProps = (state: DefaultState) => ({
    action: state.auth.action
});

interface NavBarUnauthenticateProps {
    action: String;
    dispatch: Dispatch
}

var activeForm = '';

const NavBarUnauthenticate = (props: NavBarUnauthenticateProps) => {
    const [state, setState] = useState({
        collapse: false,
    });

    const toggleCollapse = () => setState({ collapse: !state.collapse });
    const toggleSignIn = (e: React.MouseEvent) => {
        e.preventDefault();
        props.dispatch(SignInOpenForm());
    }
    const toggleSignUp = (e: React.MouseEvent) => {
        e.preventDefault();
        props.dispatch(SignUpOpenForm());
    }
    const toggleIsOpen = () => props.dispatch(CloseForm());
    const isOpen = props.action !== '';
    const mode = props.action === authTypes.ActionSignInOpenForm ?
        'sign-in' : 'sign-up';
    activeForm = props.action !== '' ? mode : activeForm;

    return (
        <Fragment>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">
                    <img alt='' style={logoStyle} src={logoSrc} /> Home
                </NavbarBrand>
                <NavbarToggler onClick={toggleCollapse} />
                <Collapse isOpen={state.collapse} navbar>
                    <Nav className="mr-auto" navbar />
                    <Nav className="mr-right" navbar>
                        <NavItem>
                            <Link
                                className="nav-link" to=""
                                onClick={toggleSignIn}>Sign in</Link>
                        </NavItem>
                        <NavItem>
                            <Link
                                className="nav-link" to=""
                                onClick={toggleSignUp}>Sign up</Link>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>

            <Auth
                mode={activeForm}
                isOpen={isOpen}
                toggle={toggleIsOpen} />
        </Fragment>
    );
}

export default connect(mapProps)(NavBarUnauthenticate);
