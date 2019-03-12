import {SET_GRAPHICS} from '../constants/actions';

const initialState = {
    grayGroups: false
}

function graphicsReducer(state = initialState, action) {
    if(action.type === SET_GRAPHICS) {
        return Object.assign({}, state, {[action.key]: action.value})
    }
    return state;
}

export default graphicsReducer;