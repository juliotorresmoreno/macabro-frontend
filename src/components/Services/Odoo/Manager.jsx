

// @flow

import React, { useState } from 'react';
import { Button } from 'reactstrap';
import Table from './Table';
import { withRouter, RouteChildrenProps } from 'react-router-dom';
import { ManagerContext, DefaultManagerContextValue } from './context';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import LoadData from './LoadData';
import * as instances from '../../../actions/instances';
import { DefaultState, InstanceState } from '../../../store/state';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPlus, faPlay, faPowerOff, faRedo, faTrashAlt, faEdit
} from '@fortawesome/free-solid-svg-icons';

interface ManagerProps extends RouteChildrenProps {
    dispatch: ThunkDispatch;
    instances: InstanceState;
}

const mapProps = (state: DefaultState) => ({
    instances: state.instances
});

const Manager: React.FC<ManagerProps> = (props) => {
    const defaultState: DefaultManagerContextValue = {};
    const [context, setContext] = useState(defaultState);
    const onLaunch = () => {
        props.history.push('/services/odoo/launch');
    }
    const onEdit = () => {
        props.history.push(`/services/odoo/${context.selectValue.id}`);
    }
    const onRemove = async () => {
        const _confirm = window.confirm('¿Realmente deseas eliminar esta instancia?')
        if (_confirm) {
            await props.dispatch(instances.Delete(context.selectValue.id));
            await props.dispatch(instances.Get());
        }
    }
    return (
        <ManagerContext.Provider value={{ ...context, setContext }}>
            <LoadData />
            <div>
                <Button color='primary' onClick={onLaunch}>
                    <FontAwesomeIcon icon={faPlus} />
                </Button>&nbsp;&nbsp;
                <Button color='info' disabled={!context.selectValue} onClick={onEdit}>
                    <FontAwesomeIcon icon={faEdit} />
                </Button>&nbsp;&nbsp;&nbsp;

                <div style={{ float: 'right' }}>
                    <Button color='success' disabled={!context.selectValue}>
                        <FontAwesomeIcon icon={faPlay} />
                    </Button>&nbsp;&nbsp;
                    <Button color='secondary' disabled={!context.selectValue}>
                        <FontAwesomeIcon icon={faPowerOff} />
                    </Button>&nbsp;&nbsp;
                    <Button color='info' disabled={!context.selectValue}>
                        <FontAwesomeIcon icon={faRedo} />
                    </Button>&nbsp;&nbsp;
                    <Button color='danger' disabled={!context.selectValue} onClick={onRemove}>
                        <FontAwesomeIcon icon={faTrashAlt} />
                    </Button>
                </div>
            </div>
            <br />
            <Table />
        </ManagerContext.Provider>
    )
}

export default connect(mapProps)(withRouter(Manager));