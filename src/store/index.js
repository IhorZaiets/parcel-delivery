import { combineReducers } from 'redux';

import requestReducer from './requests/reducer';

const rootReducer = combineReducers({
	requests: requestReducer,
});

export default rootReducer;
