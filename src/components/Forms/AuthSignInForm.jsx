
import React, { Fragment } from 'react';
import { FormGroup, Input, Label, Alert } from 'reactstrap';
import FormControl from './FormControl';
import { emailValid, passwordValid } from '../Forms/validator';

export class SignInFormData {
    email: string;
    password: string;
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

interface AuthSignInFormProps {
    control: FormControl<SignInFormData>;
}

class AuthSignInForm extends React.PureComponent<AuthSignInFormProps> {
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

export default AuthSignInForm;