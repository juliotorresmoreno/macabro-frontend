

// @flow

import React from 'react';
import { LaunchContext, DefaultLaunchContextValue } from './context';
import { Button } from 'reactstrap';
import { useState } from 'react';
import Plan from './Plan';
import { withRouter, RouteChildrenProps } from 'react-router-dom';
import PlanDetails from './PlanDetails';
import { generate_password } from '../../../utils/secure';

interface LaunchProps extends RouteChildrenProps {

}

const Launch: React.FC<LaunchProps> = (props) => {
    const defaultValue: DefaultLaunchContextValue = {
        plan: 1,
        page: 1,
        name: '',
        type: 'small',
        is_cloud: true,
        replicas: 0,
        autoscaling: 0,
        allow_deletion: 0,
        backup_periodicity: 24,
        url: '',
        username: 'admin',
        password: generate_password(16),
    }
    const [context, setContext] = useState(defaultValue);
    const onBuy = () => {
        if (context.plan === 1) {
            let newState: DefaultLaunchContextValue = {
                ...context,
                type: '-',
                is_cloud: false,
                replicas: 0,
                page: 2
            }
            setContext(newState);
            return
        }
        setContext({
            ...context,
            type: 'small',
            is_cloud: true,
            replicas: 1,
            page: 2
        });
    }

    return (
        <LaunchContext.Provider value={{ ...context, setContext }}>
            {context.page === 1 ? (
                <>
                    <Plan />
                    <br />
                    <Button color='primary' onClick={onBuy}>
                        Contratar
                    </Button>
                </>
            ) : false}
            {context.page === 2 ? <PlanDetails /> : false}
        </LaunchContext.Provider>
    )
}

export default withRouter(Launch);