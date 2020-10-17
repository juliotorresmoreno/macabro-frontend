import { businessTypes } from '../actions/actionTypes';
import { createReducer, Action } from '@reduxjs/toolkit';
import { BusinessProfile } from '../models';

const defaultState: BusinessProfile = {
    id: 0,
    user_id: 0,
    name: '',
    nit: '',
    legal_representative: '',
    website: '',
    address: '',
    country: '',
    city: '',
    economic_activity: '',
    imgSrc: ''
};

export default createReducer(defaultState, {
    [businessTypes.Get]: function (state, action: Action) {
        const payload: BusinessProfile = action.payload;
        Object.assign(state, payload);
    }
});