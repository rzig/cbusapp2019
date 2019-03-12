import React from 'react';
import { View } from 'react-native';
import pressable from '../helpers/pressable';
import Icon from 'react-native-vector-icons/AntDesign'

/**
 * Given a size (width and height), returns a view containing a centered icon
 * If no icon is provided, it will return an empty view.
 * @param {string} name  - the name of the AntDesign icon to display
 * @param {number} size  - the width and height of the icon
 * @param {string} color - the color of the icon 
 */
const OptionalIcon = ({name, size, color}) => {
    if(name) {
        return (
            <View style={{display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "100%"}}>
                <Icon name={name} size={size} color={color}/>
            </View>
        )
    } else {
        return (
            <View/>
        )
    }
}

/**
 * Returns a circular button
 * @param {string}   color       - the color of the button
 * @param {number}   size        - the width and height of the button in pixels
 * @param {function} onPress     - function called when the button is presses
 * @param {string}   icon        - name of an AntDesign icon to be placed inside
 * @param {string}   iconColor   - color of the icon
 * @param {string}   name        - name of the button, used for accessibility
 * @param {string}   description - what happens when the button is pressed, used for accessibility
 */
const CircleButton = ({color, size, onPress, icon, iconColor, name, description}) => {
    return (
        <View
            style={{borderRadius: size, backgroundColor: color, width: size, height: size}}
            onPress={onPress}
            accessibilityLabel={name}
            accessibilityHint={description}
        >
            <OptionalIcon name={icon} size={.45 * size} color={iconColor}/>
        </View>
    )
}

export default pressable(CircleButton);