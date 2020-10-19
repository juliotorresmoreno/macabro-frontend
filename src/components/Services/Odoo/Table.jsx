

// @flow

import React, { Fragment, useContext } from 'react';
import { Table as TableBS, Input } from 'reactstrap';
import { ManagerContext } from './context';
import { Instance } from '../../../models';
import { connect } from 'react-redux';
import { DefaultState, InstanceState } from '../../../store/state';

interface TableProps {
    instances: InstanceState;
}

const styles = {
    checkbox: { marginLeft: 'auto' }
}

const mapProps = (state: DefaultState) => ({
    instances: state.instances
});

const Table: React.FC<TableProps> = (props) => {
    const context = useContext(ManagerContext);
    const selectValue = context.selectValue || {};
    const onChange = (row: Instance) => (evt) => {
        if (selectValue.id === row.id) {
            context.setContext({
                ...context,
                selectValue: undefined
            });
            return;
        }
        context.setContext({
            ...context,
            selectValue: row
        });
    };
    const instances = props.instances;
    return (
        <Fragment>
            <TableBS id='odoo-table' bordered striped>
                <thead>
                    <tr>
                        <th></th>
                        <th>Nombre</th>
                        <th>Tipo</th>
                        <th>Estado</th>
                    </tr>
                </thead>
                <tbody>
                    {instances.map(function (row, index) {
                        return (
                            <tr key={index} onClick={onChange(row)}>
                                <td>
                                    <Input
                                        checked={selectValue.id === row.id}
                                        onChange={() => {}}
                                        type='checkbox'
                                        style={styles.checkbox} />
                                </td>
                                <td>{row.name}</td>
                                <td>{row.type === '-' ? 'basic': row.type}</td>
                                <td>{row.type === '-' ? 'running': row.status}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </TableBS>
        </Fragment>
    )
}

export default connect(mapProps)(Table);