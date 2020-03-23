

import React from 'react';
import { connect } from 'react-redux';
import { DefaultState } from '../../store/state'
import { useEffect } from 'react';
import * as profile from '../../actions/profile';

const mapProps = (state: DefaultState) => ({
    auth: state.auth.auth
});

const LoadData: React.FC = ({ auth, dispatch }) => {
    useEffect(() => {
        if (auth) dispatch(profile.Get());
    })
    return false;
}

export default connect(mapProps)(LoadData);