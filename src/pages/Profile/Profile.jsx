

import React, { Fragment } from 'react';
import NavBarAuthenticate from '../../components/NavBar/NavBarAuthenticate';
import UserProfile from '../../components/Profile/UserProfile';
import { Container, Row, Col, ListGroup } from 'reactstrap';
import { Link, withRouter, RouteComponentProps, Switch, Route } from 'react-router-dom';
import Business from '../../components/Profile/Business';
import Billing from '../../components/Profile/Billing';
import Statistics from '../../components/Profile/Statistics';
import PaymentMethods from '../../components/Profile/PaymentMethods';
import { useEffect } from 'react';
import { DefaultState } from '../../store/state';
import * as countries from '../../actions/countries';
import { connect, DispatchProp } from 'react-redux';

const className = "list-group-item-action list-group-item";


interface ProfileProps extends RouteComponentProps {
    countries: Number,
    dispatch: DispatchProp
}

const mapProps = (state: DefaultState) => ({
    countries: state.countries.length
});

const Profile = (props: ProfileProps) => {
    const active = [
        props.location.pathname === "/profile" ? "active" : '',
        props.location.pathname === "/profile/business" ? "active" : '',
        /\/profile\/billing/.test(props.location.pathname) ? "active" : '',
        props.location.pathname === "/profile/payment-methods" ? "active" : '',
        props.location.pathname === "/profile/statistics" ? "active" : ''
    ];


    useEffect(() => {
        if (props.countries === 0) {
            props.dispatch(countries.Get());
        }
    });

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
                            {
                            /*<Link to="/profile/billing"
                                className={`${className} ${active[2]}`}>
                                Facturación
                            </Link>
                            <Link to="/profile/payment-methods"
                                className={`${className} ${active[3]}`}>
                                Metodos de pago
                            </Link>
                            */}
                            {/*<Link to="/profile/statistics"
                                className={`${className} ${active[4]}`}>
                                Estadisticas
                            </Link>*/}
                        </ListGroup>
                    </Col>
                    <Col>
                        <Row>
                            <Col>
                                <Switch>
                                    <Route path='/profile/business' component={Business} exact />
                                    <Route path='/profile/billing' component={Billing} exact />
                                    <Route path='/profile/payment-methods' component={PaymentMethods} exact />
                                    <Route path='/profile/statistics' component={Statistics} exact />
                                    <Route path='/profile' component={UserProfile} exact />
                                </Switch>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <br />
                <br />

                {/*<Footer />*/}
            </Container>
        </Fragment>
    );
}

export default connect(mapProps)(withRouter(Profile));

