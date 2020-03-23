
// @flow

import { countryTypes } from '../actions/actionTypes';
import { createReducer, Action } from '@reduxjs/toolkit';
import { CountriesState } from '../store/state';

const defaultState: CountriesState = [];

export default createReducer(defaultState, {
    [countryTypes.Get]: (state, action: Action) => {
        state.splice(0);
        state.push(...action.payload)
    }
});