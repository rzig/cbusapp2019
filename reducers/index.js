import {combineReducers} from 'redux';
import groupsReducer from './groups';
import preferencesReducer from './preferences';
import graphicsReducer from './graphics';

const rootReducer = combineReducers({
    groups: groupsReducer,
    preferences: preferencesReducer,
    graphics: graphicsReducer
});

export default rootReducer;