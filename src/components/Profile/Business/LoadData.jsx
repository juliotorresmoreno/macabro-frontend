

import React from 'react';
import { connect } from 'react-redux';
import { DefaultState } from '../../../store/state'
import { useEffect } from 'react';
import * as business from '../../../actions/business';

const mapProps = (state: DefaultState) => ({
    auth: state.auth.auth
});

const LoadData: React.FC = ({ auth, dispatch }) => {
    useEffect(() => {
        if (auth) dispatch(business.Get());
    })
    return false;
}

export default connect(mapProps)(LoadData);