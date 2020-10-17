
// @flow

import React, { Fragment } from 'react';
import NavBarAuthenticate from '../../components/NavBar/NavBarAuthenticate';
import { Container, Col, Row } from 'reactstrap';
//import Footer from '../../components/Footer';
import Menu from './Menu';
import OdooService from '../../components/Services/Odoo';
import SupportService from '../../components/Services/Support';
import MessagesService from '../../components/Services/Messages';
import { withRouter, RouteChildrenProps, Redirect, Switch, Route } from 'react-router-dom';

interface AppsProps extends RouteChildrenProps {

}

const Apps: React.FC<AppsProps> = (props) => {
    if (props.location.pathname === '/services') {
        return <Redirect to='/services/odoo' />
    }
    return (
        <Fragment>
            <NavBarAuthenticate />
            <br />
            <Container>
                <Row>
                    <Col md={3}>
                        <Menu />
                    </Col>
                    <Col>
                        <Switch>
                            <Route path="/services/odoo" component={OdooService} />
                            <Route path="/services/support" component={SupportService} />
                            <Route path="/services/messages" component={MessagesService} />
                        </Switch>
                    </Col>
                </Row>

                <br />
                <br />

                {/*<Footer />*/}
            </Container>
        </Fragment>
    )
}

export default withRouter(Apps);