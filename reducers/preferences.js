import {SET_PREFERENCE} from '../constants/actions';

const initialState = {
    groupCode: ""
}

function preferencesReducer(state = initialState, action) {
    if(action.type === SET_PREFERENCE) {
        return Object.assign({}, state, {[action.preference]: action.value})
    }
    return initialState;
}

export default preferencesReducer;
