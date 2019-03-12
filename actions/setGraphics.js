import {SET_GRAPHICS} from '../constants/actions';

function setGraphics(key, value) {
    return {type: SET_GRAPHICS, key: key, value: value}
}

export default setGraphics;