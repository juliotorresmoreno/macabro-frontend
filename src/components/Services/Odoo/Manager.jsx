

// @flow

import React, { Fragment } from 'react';
import { Row, Col, Button } from 'reactstrap';
import Table from './Table';
import { withRouter, RouteChildrenProps } from 'react-router-dom';

interface ManagerProps extends RouteChildrenProps {

}

const Manager: React.FC<ManagerProps> = (props) => {
    const onLaunch = () => {
        props.history.push('/services/odoo/launch');
    }
    return (
        <Fragment>
            <Row>
                <Col>
                    <Button color='primary' onClick={onLaunch}>
                        Lanzar
                    </Button>&nbsp;&nbsp;
                    <Button color='primary'>
                        Iniciar
                    </Button>&nbsp;&nbsp;
                    <Button color='primary'>
                        Detener
                    </Button>&nbsp;&nbsp;
                    <Button color='primary'>
                        Reiniciar
                    </Button>
                </Col>
            </Row>
            <br />
            <Table />
        </Fragment>
    )
}

export default withRouter(Manager);