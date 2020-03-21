

import React, { Fragment } from 'react';
import Pagination from '../Pagination';
import './payment-methods.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'reactstrap';
import AppendPaymentMethods from './AppendPaymentMethods';

const PaymentMethods = () => {
    const [page, onPageChange] = useState(1);
    const [isOpen, setIsOpen] = useState(false);
    const append = (e: React.MouseEvent<HTMLInputElement>) => {
        e.preventDefault();
        setIsOpen(true);
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
                            <tr>
                                <td>Hohar</td>
                                <td>Visa</td>
                                <td>**** **** **** 2343</td>
                                <td>Si</td>
                                <td>
                                    <Link to={'/profile/payment-methods'}>
                                        <i className="fa fa-trash"></i>
                                    </Link>
                                </td>
                            </tr>
                            <tr>
                                <td>Hohar</td>
                                <td>Visa</td>
                                <td>**** **** **** 2343</td>
                                <td><Link to=''>Establecer</Link></td>
                                <td>
                                    <Link to={'/profile/payment-methods'}>
                                        <i className="fa fa-trash"></i>
                                    </Link>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
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

export default PaymentMethods;