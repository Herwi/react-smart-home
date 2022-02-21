import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import devicesReducer from '../reducers/devices/devices.reducer';

const store = createStore(devicesReducer, applyMiddleware(thunk));
export default store;