

// @flow

import React from 'react';
import { LaunchContext } from './context';
import { useContext } from 'react';
import { Col, Row, Card, CardBody, Button } from 'reactstrap';
import { useState } from 'react';
import PlanDetailsForm from '../../Forms/PlanDetailsForm';

interface PlanDetailsProps {

}

const PlanDetails: React.FC<PlanDetailsProps> = () => {
    const context = useContext(LaunchContext);
    const [state, setState] = useState({
        isCloud: context.plan !== 1,
        type: 3,
        replicas: 1,
        autoscaling: 0,
        allow_deletion: 0,
        backup_periodicity: 24,
        url: '',
        username: 'admin',
        password: 'admin',
    });
    const onChange = (name, value) => {
        setState({ ...state, [name]: value })
    }
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }
    return (
        <>
            <Row>
                <Col>
                    <Card>
                        <CardBody>
                            <PlanDetailsForm
                                onChange={onChange}
                                {...state} />
                            <Button
                                onClick={onSubmit}
                                color='primary'>
                                Enviar
                            </Button>
                        </CardBody>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card>
                        <CardBody>
                            Detalles de facturación
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default PlanDetails;