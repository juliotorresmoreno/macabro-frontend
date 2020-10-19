
// @flow

import { instanceTypes } from '../actions/actionTypes';
import { createReducer, Action } from '@reduxjs/toolkit';
import { InstanceState } from '../store/state';
import { Instance } from '../models';

const defaultState: InstanceState = [];

export default createReducer(defaultState, {
    [instanceTypes.Get]: (state, action: Action) => {
        const payload: Instance[] = action.payload;
        state.splice(0);
        state.push(...payload);
    }
});