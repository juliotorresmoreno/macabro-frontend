

// @flow

import React from 'react';
import { LaunchContext } from './context';
import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import BasicPlan from '../../Documents/BasicPlan';
import SharePlan from '../../Documents/SharePlan';
import DedicatePlan from '../../Documents/DedicatePlan';
import { useContext } from 'react';

interface PlanProps {

}

const styles = {
    link: {
        cursor: 'pointer'
    },
    content: {
        minHeight: 400
    },
    img: { width: '100%' }
}

const Plan: React.FC<PlanProps> = () => {
    let context = useContext(LaunchContext);
    let { plan, setContext } = context;
    let setPlan = (n: Number) => setContext({ ...context, plan: n });
    return (
        <>
            <Nav tabs>
                <NavItem>
                    <NavLink
                        onClick={() => setPlan(1)}
                        style={styles.link}
                        active={plan === 1}>
                        Basico
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        onClick={() => setPlan(2)}
                        style={styles.link}
                        active={plan === 2}>
                        Compartido
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        onClick={() => setPlan(3)}
                        style={styles.link}
                        active={plan === 3}>
                        Dedicado
                    </NavLink>
                </NavItem>
            </Nav>
            <br />
            <div style={styles.content}>
                <TabContent activeTab={plan}>
                    <TabPane tabId={1}>
                        <BasicPlan />
                    </TabPane>
                    <TabPane tabId={2}>
                        <SharePlan />
                    </TabPane>
                    <TabPane tabId={3}>
                        <DedicatePlan />
                    </TabPane>
                </TabContent>
            </div>
        </>
    )
}

export default Plan;