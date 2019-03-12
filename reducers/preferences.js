import {SET_PREFERENCE} from '../constants/actions';

const initialState = {
    groupCode: "",
    group: {panel: {}}
}

function preferencesReducer(state = initialState, action) {
    if(action.type === SET_PREFERENCE) {
        return Object.assign({}, state, {[action.preference]: action.value})
    }
    return state;
}

export default preferencesReducer;