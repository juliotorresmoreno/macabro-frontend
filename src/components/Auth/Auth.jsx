
// @flow

import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { connect } from 'react-redux';
import AuthSignInForm, { SignInFormData } from '../Forms/AuthSignInForm';
import AuthSignUpForm, { SignUpFormData } from '../Forms/AuthSignUpForm';
import FormControl from '../Forms/FormControl';
import { Dispatch } from 'redux';
import { SignUp, SignIn } from '../../actions/auth';
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

const Auth: React.FC<AuthProps> = (props) => {
    const toggle = () => {
        props.toggle();
        control.reset();
    }
    const isOpen = props.isOpen;
    const control = props.mode === 'sign-in' ? controlSignIn : controlSignUp;

    const onSubmit = async () => {
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
            <ModalHeader toggle={toggle}>
                {props.mode === 'sign-in' ? 'Sign in' : 'Sign up'}
            </ModalHeader>
            <ModalBody>
                {props.mode === 'sign-in' ?
                    <AuthSignInForm control={controlSignIn} /> :
                    <AuthSignUpForm control={controlSignUp} />}
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={onSubmit}>
                    {props.mode === 'sign-in' ? 'Sign in' : 'Sign up'}
                </Button>{' '}
                <Button color="danger" onClick={toggle}>Cancel</Button>
            </ModalFooter>
        </Modal>

    );
}

export default connect(mapProps)(Auth);
