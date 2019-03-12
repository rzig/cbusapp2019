import {SET_PREFERENCE} from '../constants/actions';

function setPreference(preference, value) {
    return {type: SET_PREFERENCE, preference: preference, value: value}
}

export default setPreference;