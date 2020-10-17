

// @flow

import React, { Fragment } from 'react';
import { Container } from 'reactstrap';
import NavBarUnauthenticate from '../../components/NavBar/NavBarUnauthenticate';
import Footer from '../../components/Footer';
import Team from '../../components/Landing/Team';
import Contact from '../../components/Landing/Contact';
import Testimonials from '../../components/Landing/Testimonials';
import TermsC from '.';

const Terms = () => {
    return (
        <Fragment>
            <NavBarUnauthenticate />
            <br />
            <Container>
                <TermsC />
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

export default Terms;