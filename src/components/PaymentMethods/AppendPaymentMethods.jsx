
// @flow

import React, { Fragment } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import FormPaymentMethods, { Context, validate, IContextState } from '../Forms/PaymentMethods'
import { useState } from 'react';
import store from '../../store';
import * as paymentMethods from '../../actions/payment-methods';
import { parseError } from '../../helper';

interface AppendPaymentMethodsProps {
    isOpen: Boolean,
    toggle: () => void,
    number: '',
    expiration: '',
    cvv: ''
}

const AppendPaymentMethods = (props: AppendPaymentMethodsProps) => {
    const { isOpen, toggle } = props;
    const [state, setState] = useState<IContextState>({
        name: '',
        alias_number: '',
        cvv: '',
        expiration_month: '',
        expiration_year: '',
        number: '',
        errors: {
            name: '',
            alias_number: '',
            cvv: '',
            expiration_month: '',
            expiration_year: '',
            number: '',
            error: ''
        }
    });
    const onChange = (key: String, value: any) => {
        setState({ ...state, [key]: value })
    };
    const onSubmit = async () => {
        try {
            var data = { ...state };
            delete data.errors;
            const [ok, errors] = validate(data);
            if (!ok) return setState({ ...state, errors });
            setState({ ...state, errors: { error: '' } });
    
            await store.dispatch(paymentMethods.Put(data));
            store.dispatch(paymentMethods.Get());
    
            setState({
                name: '',
                alias_number: '',
                cvv: '',
                expiration_month: '',
                expiration_year: '',
                number: '',
                errors: { error: '' }
            });
            toggle();   
        } catch (error) {
            let errors = parseError(error);
            setState({ ...state, errors });
        }
    }

    return (
        <Fragment>
            <Context.Provider value={state}>
                <Modal isOpen={isOpen} toggle={toggle}>
                    <ModalHeader toggle={toggle}>
                        Agregar metodo de pago
                    </ModalHeader>
                    <ModalBody>
                        <FormPaymentMethods onChange={onChange} />
                    </ModalBody>
                    <ModalFooter>
                        <Button color='primary' onClick={onSubmit}>Agregar</Button>
                        <Button color='danger' onClick={toggle}>Cancelar</Button>
                    </ModalFooter>
                </Modal>
            </Context.Provider>
        </Fragment>
    )
}

export default AppendPaymentMethods;