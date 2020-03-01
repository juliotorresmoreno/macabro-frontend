

// @flow

import React, { Fragment } from 'react';
import { Container } from 'reactstrap';
import NavBarUnauthenticate from '../../components/NavBar/NavBarUnauthenticate';
import Services from '../../components/Services';
import Features from '../../components/Features';
import Products from '../../components/Products';
import Footer from '../../components/Footer';
import Team from '../../components/Team';
import Contact from '../../components/Contact';
import Testimonials from '../../components/Testimonials';
import Apps from '../../components/Apps';
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