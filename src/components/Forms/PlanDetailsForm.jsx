

import React, { Fragment } from 'react';
import { FormGroup, Label, Input, Row, Col, InputGroupAddon, InputGroup, Alert } from 'reactstrap';
import { Instance } from '../../models';

const styles = {
    checkbox: {
        marginLeft: 'auto',
        position: 'relative'
    }
}

const machineTypes = [
    { id: 'small', name: 'Small 1 Core, 2GB Ram', cpu: 1, memory: 2 },
    { id: 'micro', name: 'Micro 2 Core, 2GB Ram', cpu: 2, memory: 2 },
    { id: 'medium', name: 'Medium 2 Core, 4GB Ram', cpu: 2, memory: 4 },
    { id: 'large', name: 'Large 2 Core, 8GB Ram', cpu: 2, memory: 8 },
    { id: 'xlarge', name: 'Xlarge 4 Core, 16GB Ram', cpu: 4, memory: 16 }
]

const backupsTypes = [
    { id: 1, name: 'Cada 12 horas', period: 12 },
    { id: 2, name: 'Diario', period: 24 },
    { id: 3, name: 'Cada 3 dias', period: 24 * 3 },
    { id: 4, name: 'Semanal', period: 24 * 7 },
    { id: 5, name: 'Quincenal', period: 24 * 14 },
    { id: 6, name: 'Cada 30 dias', period: 24 * 30 }
]

interface PlanDetailsFormProps extends Instance {
    errors: {
        name: string;
    };
    onChange: (name: string, value: any) => void
}

const prevUrl = /^[a-zA-Z0-9\-_]+$/

export const validate = (data: Instance) => {
    let errors = {}
    if (!data.name) {
        errors.name = 'El nombre es requerido!';
    }
    return [Object.keys(errors).length === 0, errors]
}

const PlanDetailsForm: React.FC<PlanDetailsFormProps> = (props) => {
    const {
        is_cloud, replicas, // autoscaling,
        allow_deletion, backup_periodicity,
        url, username, password
    } = props;
    const onChange = (e: React.FormEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (e.target.type === 'checkbox') {
            props.onChange(name, !props[name])
            return
        }
        props.onChange(name, value);
    }
    const onUrlChange = (e: React.FormEvent<HTMLInputElement>) => {
        if (prevUrl.test(e.target.value)) {
            props.onChange('url', e.target.value.toLowerCase());
        }
    }
    return (
        <Fragment>
            <FormGroup>
                <Label>
                    Nombre
                </Label>
                <Input
                    name='name' onChange={onChange}
                    value={props.name} type='text' />
                {props.errors.name ?
                    <Fragment>
                        <br />
                        <Alert color="danger">
                            {props.errors.name}
                        </Alert>
                    </Fragment> : false}
            </FormGroup>
            <FormGroup>
                <Label>
                    Tipo de instancia
                </Label>
                <Input
                    disabled={!is_cloud}
                    name='type' onChange={onChange}
                    value={props.type} type='select'>
                    {is_cloud ? (
                        machineTypes.map((m, key) => (
                            <option value={m.id} key={key}>
                                {m.name}
                            </option>
                        ))) : (
                            <option value={'-'}>
                                Sistema administrado
                            </option>
                        )}
                </Input>
            </FormGroup>
            <FormGroup>
                <Label>
                    Numero de maquinas
                </Label>
                <Input
                    name='replicas' onChange={onChange}
                    min={1} max={7} disabled={!is_cloud}
                    value={replicas} type='number' />
            </FormGroup>

            <Row>
                {/*<Col>
                    <FormGroup>
                        <Label check>
                            <Input
                                name='autoscaling'
                                onChange={onChange}
                                type='checkbox'
                                checked={autoscaling}
                                disabled={!is_cloud}
                                style={styles.checkbox} />
                            &nbsp;
                            Permitir escalado automatico
                        </Label>
                    </FormGroup>
                </Col>*/}
                <Col>
                    <FormGroup>
                        <Label check>
                            <Input
                                name='allow_deletion' onChange={onChange}
                                checked={allow_deletion} disabled={!is_cloud}
                                style={styles.checkbox} type='checkbox' />
                            &nbsp;
                            Permitir el borrado
                        </Label>
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup>
                        <Label check>
                            <Input
                                name='is_cloud' onChange={onChange}
                                checked={is_cloud} disabled={true}
                                style={styles.checkbox} type='checkbox' />
                            &nbsp;
                            Es cloud
                        </Label>
                    </FormGroup>
                </Col>
            </Row>

            <FormGroup>
                <Label>
                    Periodicidad de los backups
                </Label>
                <Input
                    name='backup_periodicity'
                    onChange={onChange} type='select'
                    value={backup_periodicity}>
                    {backupsTypes.map((t, key) => (
                        <option key={key} value={t.period}>
                            {t.name}
                        </option>
                    ))}
                </Input>
            </FormGroup>


            <FormGroup>
                <Label>
                    Url
                </Label>
                <InputGroup>
                    <InputGroupAddon addonType="prepend">
                        http://
                    </InputGroupAddon>
                    <Input
                        name='url'
                        onChange={onUrlChange}
                        value={url}
                        type='text' />
                    <InputGroupAddon addonType="append">
                        .localhost:3000
                    </InputGroupAddon>
                </InputGroup>
            </FormGroup>

            <Row>
                <Col>
                    <FormGroup>
                        <Label>Usuario</Label>
                        <Input
                            value={username}
                            type='text' readOnly />
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup>
                        <Label>Contraseña</Label>
                        <Input
                            value={password}
                            type='text' readOnly />
                    </FormGroup>
                </Col>
            </Row>
        </Fragment>
    );
}

PlanDetailsForm.defaultProps = {
    is_cloud: true,
    type: 0,
    replicas: 1,
    autoscaling: 0,
    allow_deletion: 0,
    backup_periodicity: 24,
    url: '',
    username: 'admin',
    password: 'admin',
    onChange: () => void (0)
}

export default PlanDetailsForm;