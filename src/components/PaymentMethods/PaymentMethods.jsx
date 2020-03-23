
// @flow

import React, { Fragment } from 'react';
import Pagination from '../Pagination';
import './payment-methods.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Table, Alert } from 'reactstrap';
import AppendPaymentMethods from './AppendPaymentMethods';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { DefaultState, PaymentMethodState } from '../../store/state';
import * as paymentMethods from '../../actions/payment-methods'
import { PaymentMethod } from '../../models';
import { parseError } from '../../helper';

const mapProps = (state: DefaultState) => ({
    paymentMethods: state.paymentMethods
});

interface PaymentMethodsProps {
    dispatch: Dispatch,
    paymentMethods: PaymentMethodState
}

const PaymentMethods = (props: PaymentMethodsProps) => {
    const [loaded, setLoaded] = useState(false);
    if (loaded === false) {
        setLoaded(true);
        props.dispatch(paymentMethods.Get()).catch(console.trace);
    }

    const [error, setError] = useState('');
    const [page, onPageChange] = useState(1);
    const [isOpen, setIsOpen] = useState(false);
    const append = (e: React.MouseEvent<HTMLInputElement>) => {
        e.preventDefault();
        setIsOpen(true);
    }
    const setDefault = (paymentMethod: PaymentMethod) => async (e: React.MouseEvent<HTMLInputElement>) => {
        e.preventDefault();
        var data = { ...paymentMethod };
        data['default'] = 1;
        await props.dispatch(paymentMethods.Patch(data));
        props.dispatch(paymentMethods.Get());
        setError('');
    }
    const deletePaymentMethod = (paymentMethod: PaymentMethod) => async (e: React.MouseEvent<HTMLInputElement>) => {
        e.preventDefault();
        var data = { ...paymentMethod };
        data['default'] = 1;
        await props.dispatch(paymentMethods.Delete(data.id))
            .then(() => {
                props.dispatch(paymentMethods.Get());
                setError('');
            })
            .catch((err) => {
                let errors = parseError(err);
                setError(errors.error.toString());
            });
    }
    const toggle = () => setIsOpen(!isOpen);
    const total = 0;
    const limit = 10;
    return (
        <Fragment>
            <div id="payment-methods">
                <div id="content-table">
                    <Table striped>
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Tipo</th>
                                <th>Numero</th>
                                <th>Predeterminada</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.paymentMethods.map((paymentMethod, key) => (
                                <tr key={key}>
                                    <td>{paymentMethod.name}</td>
                                    <td>{paymentMethod.type}</td>
                                    <td>{paymentMethod.alias_number}</td>
                                    <td>{!paymentMethod.default ? (
                                        <Link onClick={setDefault(paymentMethod)} to={''}>
                                            Establecer
                                        </Link>
                                    ) : "Si"}</td>
                                    <td>
                                        <Link to='' onClick={deletePaymentMethod(paymentMethod)}>
                                            <i className="fa fa-trash"></i>
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    {error !== '' ? (
                        <Alert color='danger'>{error}</Alert>
                    ) : false}
                    <Link to='' onClick={append}>Agregar</Link>
                </div>
                <Pagination limit={limit}
                    page={page} total={total}
                    onChange={onPageChange} />
            </div>
            <AppendPaymentMethods
                isOpen={isOpen}
                toggle={toggle} />
        </Fragment>
    )
}

export default connect(mapProps)(PaymentMethods);