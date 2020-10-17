

// @flow

import React from 'react';
import { LaunchContext } from './context';
import { Button } from 'reactstrap';
import { useState } from 'react';
import Plan from './Plan';
import { withRouter, RouteChildrenProps } from 'react-router-dom';
import PlanDetails from './PlanDetails';

interface LaunchProps extends RouteChildrenProps {

}

const Launch: React.FC<LaunchProps> = (props) => {
    const [context, setContext] = useState({
        plan: 1,
        page: 1
    });

    const onBuy = () => {
        setContext({
            ...context,
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
            {context.page === 2 ? (
                <>
                    <PlanDetails />
                </>
            ) : false}
        </LaunchContext.Provider>
    )
}

export default withRouter(Launch);