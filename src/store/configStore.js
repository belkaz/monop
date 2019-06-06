import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import initRed from './initRed';
import initState from './initState';


export default function configureStore() {
    return createStore(
        initRed,
        initState,
        applyMiddleware(thunk)
    );
}