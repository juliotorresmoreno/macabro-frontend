
// @flow

import React, { Fragment } from 'react';
import { Alert, Row, Col, FormGroup, Label, Input as InputBS, Button } from 'reactstrap';
import Input from './Input';
import InputImage from './InputImage';
import { createContext } from 'react';
import * as validator from '../Forms/validator';
import { connect } from 'react-redux';
import { InputKeyPressValidator } from '../../helper';

interface IContextState {
    name: '',
    lastname: '',
    document_type: '',
    expedite: '',
    document: '',
    country: '',
    imgSrc: '',
    nationality: '',
    date_birth: '',
    facebook: '',
    linkedin: '',
    errors: {
        error: '',
        [x: String]: String
    }
}

export const Context = createContext<IContextState>();

interface ProfileFormProps {
    countries: any[],
    onSubmit: (state: any) => void,
    onChange: (key: String, value: String) => void
}

const mapProps = (state: DefaultState) => ({
    countries: state.countries
});

export const validate = (state: IContextState) => {
    let ok = true, errors = {};
    if (!validator.nameValid.test(state.name)) {
        errors.name = 'Name is not valid';
        ok = false;
    }
    if (!validator.nameValid.test(state.lastname)) {
        errors.lastname = 'Lastname is not valid';
        ok = false;
    }

    return [ok, errors];
}

class ProfileForm extends React.PureComponent<ProfileFormProps> {
    static contextType = Context;

    context: IContextState;

    constructor() {
        super();
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onImgChange = this.onImgChange.bind(this);
    }

    onSubmit(e: React.FormEvent<HTMLElement>) {
        e.preventDefault();
        this.props.onSubmit();
    }

    onChange(e: React.ChangeEvent<React.InputHTMLAttributes>) {
        let { name, value } = e.target;

        this.props.onChange(name, value);
    }

    onImgChange(value) {
        this.props.onChange('imgSrc', value);
    }

    render() {
        return (
            <Fragment>
                <Row>
                    <Col>
                        <Row>
                            <Col>
                                <Input
                                    error={this.context.errors.name}
                                    onChange={this.onChange}
                                    value={this.context.name}
                                    name='name' title='Nombres' />
                            </Col>
                            <Col>
                                <Input
                                    error={this.context.errors.lastname}
                                    onChange={this.onChange}
                                    value={this.context.lastname}
                                    name='lastname' title='Apellidos' />
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Label>Tipo</Label>
                                <InputBS type='select'
                                    error={this.context.errors.document_type}
                                    onChange={this.onChange}
                                    value={this.context.document_type}
                                    name='document_type' title='Tipo'>
                                    <option value='CC'>Cédula de ciudadanía</option>
                                    <option value='CE'>Cédula de extranjería</option>
                                    <option value='PA'>Pasaporte</option>
                                    <option value='RC'>Registro Civil</option>
                                    <option value='TI'>Tarjeta de identidad</option>
                                </InputBS>
                            </Col>
                            <Col>
                                <Input
                                    error={this.context.errors.expedite}
                                    onChange={this.onChange} type='date'
                                    value={this.context.expedite}
                                    name='expedite' title='Expedida' />
                            </Col>
                        </Row>
                        <Input
                            error={this.context.errors.document}
                            onKeyPress={InputKeyPressValidator(/^[0-9]{0,20}$/)}
                            onChange={this.onChange}
                            value={this.context.document}
                            name='document' title='Documento' />

                        <FormGroup>
                            <Input
                                error={this.context.errors.date_birth}
                                onChange={this.onChange}
                                value={this.context.date_birth}
                                name='date_birth'
                                title='Fecha de nacimiento'
                                type='date' />
                        </FormGroup>

                        <Row>
                            <Col>
                                <Input
                                    error={this.context.errors.country}
                                    type='select'
                                    onChange={this.onChange}
                                    value={this.context.country}
                                    name='country' title='Pais de nacimiento'>
                                    {this.props.countries.map((c, key) => (
                                        <option key={key} value={c.alpha2Code}>
                                            {c.name}
                                        </option>
                                    ))}
                                </Input>
                            </Col>
                            <Col>
                                <Input
                                    error={this.context.errors.nationality}
                                    onChange={this.onChange} type='select'
                                    value={this.context.nationality}
                                    name='nationality' title='Nacionalidad'>
                                    {this.props.countries.map((c, key) => (
                                        <option key={key} value={c.alpha2Code}>
                                            {c.name}
                                        </option>
                                    ))}
                                </Input>
                            </Col>
                        </Row>

                        <Input
                            error={this.context.errors.linkedin}
                            onChange={this.onChange}
                            value={this.context.linkedin}
                            name='linkedin' title='Linkedin' />
                        <Input
                            error={this.context.errors.facebook}
                            onChange={this.onChange}
                            value={this.context.facebook}
                            name='facebook' title='Facebook' />

                        {this.context.errors.error ?
                            <Fragment>
                                <br />
                                <Alert color="danger">
                                    {this.context.errors.error}
                                </Alert>
                            </Fragment> : false}

                        <Button onClick={this.onSubmit} color='primary'>Guardar</Button>
                    </Col>
                    <Col md={4}>
                        <div>Foto</div>
                        <InputImage
                            onChange={this.onImgChange}
                            src={this.context.imgSrc} />
                    </Col>
                </Row>
            </Fragment>
        )
    }
}

export default connect(mapProps)(ProfileForm);