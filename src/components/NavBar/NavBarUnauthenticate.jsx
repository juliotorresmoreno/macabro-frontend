import React, { useState, Fragment } from 'react';
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

const NavBarUnauthenticate = (props) => {
    const [state, setState] = useState({
        collapse: false,
        isOpen: false,
        mode: ''
    });

    const toggleCollapse = () => setState({ collapse: !state.collapse });
    const toggleSignIn = (e: React.MouseEvent) => {
        e.preventDefault();
        setState({ isOpen: !state.isOpen, mode: 'sign-in' });
    }
    const toggleSignUp = (e: React.MouseEvent) => {
        e.preventDefault();
        setState({ isOpen: !state.isOpen, mode: 'sign-up' });
    }
    const toggleIsOpen = () => setState({ ...state, isOpen: false });

    return (
        <Fragment>
            <Navbar color="primary" dark expand="md">
                <NavbarBrand href="/">
                    <i className="fa fa-home"></i> Home
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
                mode={state.mode}
                isOpen={state.isOpen}
                toggle={toggleIsOpen} />
        </Fragment>
    );
}

export default NavBarUnauthenticate;
