import {combineReducers} from 'redux';
import productsReducer from './reducer'

export default combineReducers({
    vendorMachine: productsReducer
});