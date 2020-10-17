

import React, { useState, Fragment, CSSProperties } from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { DefaultState } from '../../store/state';
import { LogOut } from '../../actions/auth';
import { UserProfile } from '../../models';
import { Dispatch } from 'redux';

const logoSrc = '//eclosionit.com/wp-content/themes/eclosiontheme/img/information-technologyitEclosion%C2%AE.png';
const logoStyle: CSSProperties = {
    maxHeight: 30
}

const mapProps = (state: DefaultState) => ({
    profile: state.auth.profile
});

interface NavBarAuthenticateProps {
    profile: UserProfile,
    dispatch: Dispatch
}

const NavBarAuthenticate = (props: NavBarAuthenticateProps) => {
    const [state, setState] = useState({
        collapse: false,
    });
    const toggleCollapse = () => setState({ collapse: !state.collapse });
    const logout = () => props.dispatch(LogOut());
    return (
        <Fragment>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">
                    <img alt='' style={logoStyle} src={logoSrc} /> Home
                </NavbarBrand>
                <NavbarToggler onClick={toggleCollapse} />
                <Collapse isOpen={state.collapse} navbar>
                    <Nav className="mr-auto" navbar />
                    <Nav className="mr-right nav-masthead" navbar>
                        <NavItem>
                            <Link className="nav-link" to="/services">
                                Servicios
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link className="nav-link" to="/profile">
                                Perfil
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link className="nav-link" to="" onClick={logout}>
                                Salir
                            </Link>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>

        </Fragment>
    )
}

export default connect(mapProps)(NavBarAuthenticate);