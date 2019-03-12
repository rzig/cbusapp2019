import { LOAD_GROUPS } from "../constants/actions";

const initialState = {
    groups: [],
    loaded: false,
    error: false,
};

function groupsReducer(state = initialState, action) {
    if(action.type == LOAD_GROUPS) {
        let newstate = {
            loaded: true,
            success: action.success
        }
        if(action.success) {
            newstate.groups = action.groups;
        }
        return Object.assign({}, state, newstate);
    }
    return state;
}

export default groupsReducer;