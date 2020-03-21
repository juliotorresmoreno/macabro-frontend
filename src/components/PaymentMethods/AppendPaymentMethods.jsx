

import React, { Fragment } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import FormPaymentMethods, { Context, validate } from '../Forms/PaymentMethods'
import { useState } from 'react';

interface AppendPaymentMethodsProps {
    isOpen: Boolean,
    toggle: () => void,
    number: '',
    expiration: '',
    cvv: ''
}

const AppendPaymentMethods = (props: AppendPaymentMethodsProps) => {
    const { isOpen, toggle } = props;
    const [state, setState] = useState({
        cvv: '',
        expiration_month: '',
        expiration_year: '',
        number: '',
        errors: {
            cvv: '',
            expiration: '',
            number: '',
            error: ''
        }
    });
    const onChange = (key: String, value: any) => {
        setState({ ...state, [key]: value })
    };
    const onSubmit = () => {
        const [ok, errors] = validate(state);
        console.log(ok, errors);
        if (!ok) return setState({ ...state, errors });
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