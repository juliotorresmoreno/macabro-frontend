

// @flow

import React, { Fragment } from 'react';
import { Table as TableBS, Input } from 'reactstrap';

interface TableProps {

}

const styles = {
    checkbox: { marginLeft: 'auto' }
}

const Table: React.FC<TableProps> = () => {
    return (
        <Fragment>
            <TableBS bordered striped>
                <thead>
                    <tr>
                        <th></th>
                        <th>Nombre</th>
                        <th>Nombre</th>
                        <th>Nombre</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <Input
                                type='checkbox'
                                style={styles.checkbox} />
                        </td>
                        <td>Nombre</td>
                        <td>Nombre</td>
                        <td>Nombre</td>
                    </tr>
                </tbody>
            </TableBS>
        </Fragment>
    )
}

export default Table;