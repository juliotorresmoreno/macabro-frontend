
import React, { Fragment } from 'react';
import { FormGroup, Input, Label, Row, Col, Alert } from 'reactstrap';
import FormControl from '../Forms/FormControl';
import { emailValid, passwordValid, nameValid, usernameValid } from '../Forms/validator';
import { Link } from 'react-router-dom';

export class SignUpFormData {
    email: string;
    name: string;
    lastname: string;
    username: string;
    password: string;
    password_confirmation: string;
    terms: Boolean;

    errors: {
        email: '',
        name: '',
        lastname: '',
        username: '',
        password: '',
        password_confirmation: ''
    } = {}

    constructor() {
        this.reset();
    }

    reset() {
        this.email = '';
        this.name = '';
        this.lastname = '';
        this.username = '';
        this.password = '';
        this.password_confirmation = '';
        this.terms = false;

        this.errors = {
            email: '',
            name: '',
            lastname: '',
            username: '',
            password: '',
            password_confirmation: '',
            error: ''
        }
    }

    validate() {
        var r = {};
        var s = true;
        if (this.name === '') {
            r.name = 'Name is required.';
            s = false;
        } else if (!nameValid.test(this.name)) {
            r.name = 'Name is not valid';
            s = false;
        }

        if (this.lastname === '') {
            r.lastname = 'Lastname is required.';
            s = false;
        } else if (!nameValid.test(this.lastname)) {
            r.lastname = 'Lastname is not valid';
            s = false;
        }

        if (this.username === '') {
            r.username = 'Username is required.';
            s = false;
        } else if (!usernameValid.test(this.username)) {
            r.username = 'Username is not valid';
            s = false;
        }

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

        if (this.password !== this.password_confirmation) {
            r.password_confirmation = 'Confirmation is required.';
            s = false;
        }

        this.errors = r
        return s
    }
}

interface AuthSignUpFormProps {
    control: FormControl<SignUpFormData>
}

class AuthSignUpForm extends React.PureComponent<AuthSignUpFormProps> {
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
        if (e.target.type !== 'checkbox') {
            this.props.control.setValue(e.target.name, e.target.value);
        } else {
            this.props.control.setValue(e.target.name, e.target.checked);
        }
    }

    render() {
        return (
            <Fragment>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label for="name">Nombres</Label>
                            <Input
                                type="text" name="name" id="name"
                                value={this.props.control.state.name}
                                onChange={this.onChange} />
                            {this.props.control.state.errors.name ?
                                <Fragment>
                                    <br />
                                    <Alert color="danger">
                                        {this.props.control.state.errors.name}
                                    </Alert>
                                </Fragment> : false}
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label for="lastname">Apellidos</Label>
                            <Input
                                type="lastname" name="lastname" id="lastname"
                                value={this.props.control.state.lastname}
                                onChange={this.onChange} />
                            {this.props.control.state.errors.lastname ?
                                <Fragment>
                                    <br />
                                    <Alert color="danger">
                                        {this.props.control.state.errors.lastname}
                                    </Alert>
                                </Fragment> : false}
                        </FormGroup>
                    </Col>
                </Row>
                <FormGroup>
                    <Label for="username">Username</Label>
                    <Input
                        type="text" name="username" id="username"
                        value={this.props.control.state.username}
                        onChange={this.onChange} />
                    {this.props.control.state.errors.username ?
                        <Fragment>
                            <br />
                            <Alert color="danger">
                                {this.props.control.state.errors.username}
                            </Alert>
                        </Fragment> : false}
                </FormGroup>
                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input
                        type="email" name="email" id="email"
                        value={this.props.control.state.email}
                        onChange={this.onChange} />
                    {this.props.control.state.errors.email ?
                        <Fragment>
                            <br />
                            <Alert color="danger">
                                {this.props.control.state.errors.email}
                            </Alert>
                        </Fragment> : false}
                </FormGroup>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label for="password">Password</Label>
                            <Input
                                type="password" name="password" id="password"
                                value={this.props.control.state.password}
                                onChange={this.onChange} />
                            {this.props.control.state.errors.password ?
                                <Fragment>
                                    <br />
                                    <Alert color="danger">
                                        {this.props.control.state.errors.password}
                                    </Alert>
                                </Fragment> : false}
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label for="password_confirmation">Confirmación</Label>
                            <Input
                                type="password" name="password_confirmation"
                                id="password_confirmation"
                                value={this.props.control.state.password_confirmation}
                                onChange={this.onChange} />
                            {this.props.control.state.errors.password_confirmation ?
                                <Fragment>
                                    <br />
                                    <Alert color="danger">
                                        {this.props.control.state.errors.password_confirmation}
                                    </Alert>
                                </Fragment> : false}
                        </FormGroup>
                    </Col>
                </Row>
                <FormGroup check>
                    <Label for="terms" check>
                        <Input
                            type="checkbox" name="terms" id="terms"
                            checked={this.props.control.state.terms}
                            onChange={this.onChange} />
                        Acepto los <Link target="blank" to="/terms">terminos y condiciones</Link>
                    </Label>
                </FormGroup>
                {this.props.control.state.errors.error ?
                    <Fragment>
                        <br />
                        <Alert color="danger">
                            {this.props.control.state.errors.error}
                        </Alert>
                    </Fragment> : false}
            </Fragment>
        )
    }
}

export default AuthSignUpForm;