

import React from 'react';
import { connect } from 'react-redux';
import { DefaultState } from '../../../store/state'
import { useEffect } from 'react';
import * as instances from '../../../actions/instances';
import { ThunkDispatch } from 'redux-thunk';

const mapProps = (state: DefaultState) => ({
    auth: state.auth.auth
});

interface LoadDataProps {
    auth: boolean;
    dispatch: ThunkDispatch
}

const LoadData: React.FC<LoadDataProps> = ({ auth, dispatch }) => {
    useEffect(() => {
        if (auth) dispatch(instances.Get());
    })
    return false;
}

export default connect(mapProps)(LoadData);