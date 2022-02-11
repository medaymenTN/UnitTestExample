
import {combineReducers, createStore} from 'redux';
import dataReducer from './dataReducer';

const rootReducer = combineReducers({dataReducer})
const store = createStore(rootReducer)
export default  store