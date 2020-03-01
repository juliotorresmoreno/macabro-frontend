

import React, { Fragment } from 'react';
import NavBarAuthenticate from '../../components/NavBar/NavBarAuthenticate';
import Footer from '../../components/Footer';
import { Container } from 'reactstrap';

const Subscription = () => {
    return (
        <Fragment>
            <NavBarAuthenticate />
            <br />
            <Container>
                Subscription
    
                <Footer />
            </Container>
        </Fragment>
    )
}

export default Subscription;

