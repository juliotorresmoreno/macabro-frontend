
import { createAction } from '@reduxjs/toolkit';
import { countryTypes } from './actionTypes';
import { Dispatch } from 'redux';

interface Country {
    alpha2Code: string,
    name: string
}

type Countries = Array<Country>;

const _Get: (c: Countries) => ActionSignIn = createAction(countryTypes.Get);
export const Get = () => {
    return async (dispatch: Dispatch, getState) => {
        let data = await (await fetch('https://restcountries.eu/rest/v2/all')).json();
        return dispatch(_Get(data));
    }
}
