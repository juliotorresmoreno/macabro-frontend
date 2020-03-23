// @flow

import { paymentMethodsTypes } from '../actions/actionTypes';
import { createReducer, Action } from '@reduxjs/toolkit';
import { PaymentMethodState } from '../store/state';

const defaultState: PaymentMethodState = [];

export default createReducer(defaultState, {
    [paymentMethodsTypes.Get]: (state, action: Action) => {
        state.splice(0);
        state.push(...action.payload)
    }
});