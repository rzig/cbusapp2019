import { Dimensions, Platform } from 'react-native'

function isX(yes, no) {
    const dimen = Dimensions.get("window");
    if((Platform.OS === "ios") && ((dimen.height === 812 || dimen.width === 812) || (dimen.height === 896 || dimen.width === 896))) {
        return yes;
    } else {
        return no;
    }
}

export default isX;