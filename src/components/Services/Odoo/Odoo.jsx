

// @flow

import React from 'react';
import Manager from './Manager';
import Launch from './Launch';
import { Switch, Route } from 'react-router-dom';

interface OdooProps {

}

const Odoo: React.FC<OdooProps> = () => {
    return (
        <Switch>
            <Route path='/services/odoo' exact component={Manager} />
            <Route path='/services/odoo/launch' exact component={Launch} />
        </Switch>
    )
}

export default Odoo;