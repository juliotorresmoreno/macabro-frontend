

// @flow

import React, { Fragment } from 'react';
import { Container } from 'reactstrap';
import NavBarUnauthenticate from '../../components/NavBar/NavBarUnauthenticate';
import Services from '../../components/Landing/Services';
import Features from '../../components/Landing/Features';
import Products from '../../components/Landing/Products';
import Footer from '../../components/Footer';
import Team from '../../components/Landing/Team';
import Contact from '../../components/Landing/Contact';
import Testimonials from '../../components/Landing/Testimonials';
import Apps from '../../components/Landing/Apps';
import store from '../../store';
import { SignInOpenForm } from '../../actions/auth';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { DefaultState } from '../../store/state';

interface LandingProps extends RouteComponentProps {

}

const Landing = (props: LandingProps) => {
    const state: DefaultState = store.getState();
    if (props.location.pathname !== "/" && !state.auth.auth) {
        store.dispatch(SignInOpenForm());
    }
    return (
        <Fragment>
            <NavBarUnauthenticate />
            <br />
            <Container>

                <Services />

                <Apps />
                <br />
                <br />

                <Features />
                <br />
                <Products />
                <br />
                <br />

                <Testimonials />,
                <br />
                <br />

                <Team />
                <br />
                <Contact />

                <Footer />
            </Container>
        </Fragment>
    )
}

export default withRouter(Landing);