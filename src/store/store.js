
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducers from '../reducers';

const localState = window.sessionStorage.getItem('state');
var defaultState;
try {
    defaultState = localState ? JSON.parse(localState) : {};
} catch (error) {
    defaultState = {};
}

const store = createStore(reducers, defaultState, composeWithDevTools(
    applyMiddleware(thunk)
));

window.onunload = function () {
    window.sessionStorage.setItem('state', JSON.stringify(store.getState()));
}

export default store;