

// @flow

import React, { useState } from 'react';
import { withRouter, RouteChildrenProps } from 'react-router-dom';
import PlanDetails from './PlanDetails';
import { EditorContext, DefaultEditorContextValue } from './context';
import { connect } from 'react-redux';
import { DefaultState, InstanceState } from '../../../store/state';
import { Instance } from '../../../models';

interface EditProps extends RouteChildrenProps {
    instances: InstanceState;
}

const mapProps = (state: DefaultState) => ({
    instances: state.instances
});

const Edit: React.FC<EditProps> = (props) => {
    const instances = props.instances;
    const instance_id: string = props.match.params.id;
    const defaultInstance: Instance = instances
        .find((instance) => instance.id === parseInt(instance_id)) || {};
    
    const defaultContext: DefaultEditorContextValue = {
        id: defaultInstance.id,
        name: defaultInstance.name,
        username: defaultInstance.username,
        password: defaultInstance.password,
        allow_deletion: defaultInstance.allow_deletion,
        autoscaling: defaultInstance.autoscaling,
        backup_periodicity: defaultInstance.backup_periodicity,
        is_cloud: defaultInstance.is_cloud,
        replicas: defaultInstance.replicas,
        status: defaultInstance.status,
        type: defaultInstance.type,
        url: defaultInstance.url,
    };
    const [context, setContext] = useState(defaultContext);
    if (!instance_id) {
        return false;
    }
    return (
        <EditorContext.Provider value={{ ...context, setContext }}>
            <PlanDetails edit={true} />
        </EditorContext.Provider>
    )
}

export default connect(mapProps)(withRouter(Edit));
