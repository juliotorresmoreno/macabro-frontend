
import React, { Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap';
import NavBarUnauthenticate from '../../components/NavBar/NavBarUnauthenticate';
import Services from '../../components/Services';
import { Media } from '../../components/Media';
import { Product } from '../../components/Product';
import Footer from '../../components/Footer';
import Team from '../../components/Team';
import Contact from '../../components/Contact';
import Testimonials from '../../components/Testimonials';
import Apps from '../../components/Apps';

const medias = [1, 2, 3, 4];
const products = [1, 2, 3];

const Auth = () => {
    return (
        <Fragment>
            <NavBarUnauthenticate />
            <br />
            <Container>
                
                <Services />
                <br />
                <br />

                <Apps />
                <br />
                <br />

                <Row>
                    {medias.map((media, key) => <Col key={key} md={6} xs={12}>
                        <Media />
                        <br />
                    </Col>)}
                </Row>
                <br />
                <Row>
                    {products.map((media, key) => <Col key={key} md={4} xs={12}>
                        <Product />
                        <br />
                    </Col>)}
                </Row>
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

export default Auth;