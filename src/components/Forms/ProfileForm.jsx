
import React, { Fragment } from 'react';
import { Alert, Row, Col, FormGroup, Label, Input as InputBS, Button } from 'reactstrap';
import FormControl from './FormControl';
import { emailValid, passwordValid } from './validator';
import Input from './Input';

export class ProfileFormData {
    email: String;
    password: String;
    errors: { email: '', password: '' } = {}

    constructor() {
        this.reset();
    }

    reset() {
        this.email = '';
        this.password = '';
        this.errors = {
            email: '',
            password: '',
            error: ''
        }
    }

    validate() {
        var r = {};
        var s = true;
        if (this.email === '') {
            r.email = 'Email is required.';
            s = false;
        } else if (!emailValid.test(this.email)) {
            r.email = 'Email is not valid';
            s = false;
        }
        if (this.password === '') {
            r.password = 'Password is required';
            s = false;
        } else if (!passwordValid.test(this.password)) {
            r.password = 'Password is not valid';
            s = false;
        }
        this.errors = r
        return s
    }
}

interface ProfileFormProps {
    control: FormControl<ProfileFormData>;
}

const imgStyle: CSSProperties = {
    width: '100%'
}

class ProfileForm extends React.PureComponent<ProfileFormProps> {
    constructor() {
        super();
        this.onChange = this.onChange.bind(this);
    }
    componentDidMount() {
        this.unsubscribe = this.props.control.subscribe(this);
    }
    componentWillUnmount() {
        this.unsubscribe();
    }
    onChange(e: React.ChangeEvent<React.InputHTMLAttributes>) {
        this.props.control.setValue(e.target.name, e.target.value);
    }
    render() {
        return (
            <Fragment>
                <Row>
                    <Col>
                        <Row>
                            <Col>
                                <Input
                                    onChange={this.onChange}
                                    control={this.props.control}
                                    name='name' title='Nombres' />
                            </Col>
                            <Col>
                                <Input
                                    onChange={this.onChange}
                                    control={this.props.control}
                                    name='lastname' title='Apellidos' />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Row>
                                    <Col>
                                        <Input
                                            onChange={this.onChange}
                                            control={this.props.control}
                                            name='document_type' title='Tipo' />
                                    </Col>
                                    <Col>
                                        <Input
                                            onChange={this.onChange}
                                            control={this.props.control}
                                            name='expedite' title='Expedida' />
                                    </Col>
                                </Row>
                            </Col>
                            <Col>
                                <Input
                                    onChange={this.onChange}
                                    control={this.props.control}
                                    name='document' title='Documento' />
                            </Col>
                        </Row>
                        <FormGroup>
                            <Label>Fecha de nacimiento</Label>
                            <InputBS type='date' />
                        </FormGroup>

                        <Row>
                            <Col>
                                <Input
                                    onChange={this.onChange}
                                    control={this.props.control}
                                    name='country' title='Pais de nacimiento' />
                            </Col>
                            <Col>
                                <Input
                                    onChange={this.onChange}
                                    control={this.props.control}
                                    name='nationality' title='Nacionalidad' />
                            </Col>
                        </Row>

                        <Input
                            onChange={this.onChange}
                            control={this.props.control}
                            name='linkedin' title='Linkedin' />
                        <Input
                            onChange={this.onChange}
                            control={this.props.control}
                            name='facebook' title='Facebook' />

                        {this.props.control.state.errors.error ?
                            <Fragment>
                                <br />
                                <Alert color="danger">
                                    {this.props.control.state.errors.error}
                                </Alert>
                            </Fragment> : false}

                        <Button color='primary'>Guardar</Button>
                    </Col>
                    <Col md={4}>
                        <div>Foto</div>
                        <img
                            src="https://www.w3schools.com/bootstrap4/cinqueterre.jpg"
                            style={imgStyle}
                            className="rounded" alt="Cinque Terre" />
                    </Col>
                </Row>
            </Fragment>
        )
    }
}

export default ProfileForm;