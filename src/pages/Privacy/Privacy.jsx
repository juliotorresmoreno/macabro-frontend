

// @flow

import React, { Fragment } from 'react';
import { Container } from 'reactstrap';
import NavBarUnauthenticate from '../../components/NavBar/NavBarUnauthenticate';
import Footer from '../../components/Footer';
import Team from '../../components/Team';
import Contact from '../../components/Contact';
import Testimonials from '../../components/Testimonials';
import PrivacyC from '../../components/Privacy';

const Privacy = () => {
    return (
        <Fragment>
            <NavBarUnauthenticate />
            <br />
            <Container>
                <PrivacyC />
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

export default Privacy;