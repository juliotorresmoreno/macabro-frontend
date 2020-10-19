

// @flow

import React from 'react';
import { EditorContext, LaunchContext } from './context';
import { useContext } from 'react';
import { Col, Row, Card, CardBody, Button } from 'reactstrap';
import { useState } from 'react';
import PlanDetailsForm, { validate } from '../../Forms/PlanDetailsForm';
import * as instances from '../../../actions/instances';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { withRouter, RouteChildrenProps } from 'react-router-dom';

interface PlanDetailsProps extends RouteChildrenProps {
    dispatch: ThunkDispatch;
    edit: boolean;
}

const PlanDetails: React.FC<PlanDetailsProps> = (props) => {
    const launchContext = useContext(LaunchContext);
    const editorContext = useContext(EditorContext);
    const context = props.edit ? editorContext : launchContext;
    const [state, setState] = useState({
        is_cloud: context.is_cloud,
        name: context.name,
        type: context.type,
        replicas: context.replicas,
        autoscaling: context.autoscaling,
        allow_deletion: context.allow_deletion,
        backup_periodicity: context.backup_periodicity,
        url: context.url,
        username: context.username,
        password: context.password,
    });
    const [errors, setErrors] = useState({});
    const onChange = (name, value) => {
        setState({ ...state, [name]: value })
    }
    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const _errors = validate(state);
        if (_errors[0] === false) {
            setErrors(_errors[1]);
            return;
        }
        if (props.edit) {
            await props.dispatch(instances.Post(context.id, state));
        } else {
            await props.dispatch(instances.Put(state));
        }
        await props.dispatch(instances.Get());

        props.history.push('/services/odoo')
    }
    return (
        <>
            <Row>
                <Col>
                    <Card>
                        <CardBody>
                            <PlanDetailsForm
                                onChange={onChange}
                                {...state}
                                errors={errors} />
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

export default connect()(withRouter(PlanDetails));