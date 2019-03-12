import { NativeModules, Platform } from 'react-native';
import englishStrings from '../translations/en';
import spanishStrings from '../translations/es';

/**
 * Gets the device's current language.
 * Stolen from this stackoverflow:
 * https://stackoverflow.com/questions/33468746/whats-the-best-way-to-get-device-locale-in-react-native-ios
 */
function getLanguageCode() {
    let systemLanguage = 'en';
    if (Platform.OS === 'android') {
        systemLanguage = NativeModules.I18nManager.localeIdentifier;
    } else {
        systemLanguage = NativeModules.SettingsManager.settings.AppleLocale;
    }
    const languageCode = systemLanguage.substring(0, 2);
    return languageCode;
}

/**
 * Gets the appropriate string based on the device
 * language settings.
 * @param {*} screen the current string / category (ie Groups or accessibility)
 * @param {*} string the string to retrieve (ie description, header)
 */
function getString(screen, string) {
    const locale = getLanguageCode();
    if(locale === "es") {
        return spanishStrings[screen][string];
    }
    return englishStrings[screen][string];
}

export default getString;