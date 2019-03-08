import {combineReducers} from 'redux';
import groupsReducer from './groups';
import preferencesReducer from './preferences';

const rootReducer = combineReducers({
    groups: groupsReducer,
    preferences: preferencesReducer
});

export default rootReducer;
