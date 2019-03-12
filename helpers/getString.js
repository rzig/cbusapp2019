import englishStrings from '../translations/en';

/**
 * Gets the appropriate string based on the device
 * language settings.
 * @param {*} screen the current string / category (ie Groups or accessibility)
 * @param {*} string the string to retrieve (ie description, header)
 */
function getString(screen, string) {
    return englishStrings[screen][string];
}

export default getString;