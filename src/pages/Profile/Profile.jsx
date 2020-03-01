

import React, { Fragment } from 'react';
import NavBarAuthenticate from '../../components/NavBar/NavBarAuthenticate';
import Footer from '../../components/Footer';
import ProfileC from '../../components/Profile';
import { Container, Row, Col, ListGroup } from 'reactstrap';
import { Link, withRouter, RouteComponentProps, Switch, Route } from 'react-router-dom';
import Business from '../../components/Business/Business';

const className = "list-group-item-action list-group-item";


interface ProfileProps extends RouteComponentProps {

}

const Profile = (props: ProfileProps) => {

    const active = [
        props.location.pathname === "/profile" ? "active" : '',
        props.location.pathname === "/profile/business" ? "active" : '',
        props.location.pathname === "/profile/billing" ? "active" : '',
        props.location.pathname === "/profile/payments" ? "active" : '',
        props.location.pathname === "/profile/statistics" ? "active" : ''
    ]

    return (
        <Fragment>
            <NavBarAuthenticate />
            <br />
            <Container>
                <Row>
                    <Col md={3}>
                        <ListGroup>
                            <Link to="/profile"
                                className={`${className} ${active[0]}`}>
                                Perfil
                            </Link>
                            <Link to="/profile/business"
                                className={`${className} ${active[1]}`}>
                                Empresa
                            </Link>
                            <Link to="/profile/billing"
                                className={`${className} ${active[2]}`}>
                                Facturación
                            </Link>
                            <Link to="/profile/payments"
                                className={`${className} ${active[3]}`}>
                                Metodos de pago
                            </Link>
                            <Link to="/profile/statistics"
                                className={`${className} ${active[4]}`}>
                                Estadisticas
                        </Link>
                        </ListGroup>
                    </Col>
                    <Col>
                        <Row>
                            <Col>
                                <Switch>
                                    <Route path='/profile/business' component={Business} exact />
                                    <Route path='/profile' component={ProfileC} exact />
                                </Switch>
                            </Col>
                        </Row>
                    </Col>
                </Row>

                <Footer />
            </Container>
        </Fragment>
    );
}

export default withRouter(Profile);

