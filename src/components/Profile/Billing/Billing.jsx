

import React, { Fragment } from 'react';
import Pagination from '../../Pagination';
import './billing.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'reactstrap';

const Billing = () => {
    const [page, onChange] = useState(1);
    const total = 0;
    const limit = 10;
    return (
        <Fragment>
            <div id="billing">
                <div id="content-table">
                    <Table striped bordered>
                        <thead>
                            <tr>
                                <th>Mes</th>
                                <th>Servicio</th>
                                <th>Valor</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>uno</td>
                                <td>uno</td>
                                <td>1000</td>
                                <td>
                                    <Link to={'/profile/billing/1'}>
                                        <i className="fa fa-eye"></i>
                                    </Link>&nbsp;&nbsp;
                                    <Link to={'/profile/billing/1'}>
                                        <i className="fa fa-download"></i>
                                    </Link>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
                <Pagination limit={limit} page={page} total={total} onChange={onChange} />
            </div>
        </Fragment>
    );
}

export default Billing;