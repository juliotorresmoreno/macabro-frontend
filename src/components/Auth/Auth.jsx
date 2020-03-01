
// @flow

import React, { CSSProperties } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form } from 'reactstrap';
import { connect } from 'react-redux';
import AuthSignInForm, { SignInFormData } from '../Forms/AuthSignInForm';
import AuthSignUpForm, { SignUpFormData } from '../Forms/AuthSignUpForm';
import FormControl from '../Forms/FormControl';
import { Dispatch } from 'redux';
import { SignUp, SignIn, SignInOpenForm, SignUpOpenForm } from '../../actions/auth';
import { parseError } from '../../helper';

interface AuthProps {
    toggle: () => {},
    isOpen: Boolean,
    mode: 'sign-in' | 'sign-up',

    dispatch: Dispatch
}

const controlSignIn = new FormControl<SignInFormData>(new SignInFormData());
const controlSignUp = new FormControl<SignUpFormData>(new SignUpFormData());

const mapProps = () => ({});

const modalFooterStyle: CSSProperties = {
    display: 'block'
}

const Auth: React.FC<AuthProps> = (props) => {
    const toggle = () => {
        props.toggle();
        control.reset();
    }
    const isOpen = props.isOpen;
    const control = props.mode === 'sign-in' ? controlSignIn : controlSignUp;

    const secondaryButton = () => {
        props.mode === 'sign-in' ?
            props.dispatch(SignUpOpenForm()) :
            props.dispatch(SignInOpenForm())
    }

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            let validate = control.validate();
            if (validate !== true) {
                return;
            }
            var data = control.values();
            props.mode === 'sign-in' ?
                await props.dispatch(SignIn(data)) :
                await props.dispatch(SignUp(data));
        } catch (e) {
            control.state.errors = {
                ...control.state.errors,
                ...parseError(e.message)
            };
            control.forceUpdate();
        }
    }

    return (
        <Modal isOpen={isOpen} toggle={toggle}>
            <Form onSubmit={onSubmit}>
                <ModalHeader toggle={toggle}>
                    {props.mode === 'sign-in' ? 'Sign in' : 'Sign up'}
                </ModalHeader>
                <ModalBody>
                    {props.mode === 'sign-in' ?
                        <AuthSignInForm control={controlSignIn} /> :
                        <AuthSignUpForm control={controlSignUp} />}
                </ModalBody>
                <ModalFooter style={modalFooterStyle}>
                    <Button className="float-left" color="success" onClick={secondaryButton}>
                        {props.mode !== 'sign-in' ? 'Ingresa' : 'Registrate'}
                    </Button>
                    <div className="float-right">
                        <Button color="primary" type='submit'>
                            {props.mode === 'sign-in' ? 'Ingresa' : 'Registrate'}
                        </Button>{' '}
                        <Button color="danger" onClick={toggle}>
                            Cancelar
                        </Button>
                    </div>
                </ModalFooter>
                <br />
                <br />
            </Form>
        </Modal>
    );
}

export default connect(mapProps)(Auth);
