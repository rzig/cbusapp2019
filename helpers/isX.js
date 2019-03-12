import { Dimensions, Platform } from 'react-native'

/**
 * Detects whether the current device is an iPhone X
 * @param {*} yes - what to return if its an iPhone X
 * @param {*} no  - what to return if its NOT an iPhone X
 */
function isX(yes, no={}) {
    const dimen = Dimensions.get("window");
    if((Platform.OS === "ios") && ((dimen.height === 812 || dimen.width === 812) || (dimen.height === 896 || dimen.width === 896))) {
        return yes;
    } else {
        return no;
    }
}

export default isX;
