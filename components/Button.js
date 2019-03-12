import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {colors, fonts, measures} from '../styles/base';
import { calloutText } from '../styles/mixins';

/**
 * Returns a button with rounded corners. Defaults to having a dark
 * background with light text.
 * @param {string}   name        - the content to display in the button (ie next, back, etc)
 * @param {function} onPress     - function to call when the button is pressed
 * @param {boolean}  small       - whether to make the button "small" or not. Small buttons are 1/2 size.
 * @param {boolean}  inverse     - whether the button should be inverted (light background, dark text)
 * @param {boolean}  invisible   - whether the button should be displayed or not. When activated,
 *                                 the button will still render, but will have white text & background
 * @param {string}   description - accessibility description explaining what happens when pressed
 */
const Button = ({name, onPress, small, inverse, invisible, description=""}) => {
    return (
        <TouchableOpacity 
            onPress={onPress}
            accessibilityLabel={name}
            accessibilityHint={description}
            accessibilityRole="button"
            accessibilityStates={invisible ? ["disabled"] : null}
        >
            <View style={[styles.view, small && styles.smallView, inverse && styles.inverseView, invisible && styles.invisibleView]} onPress={onPress}>
                <Text style={[styles.text, small && styles.smallText, inverse && styles.inverseText, invisible && styles.invisibleText]}>{name}</Text>
            </View>
        </TouchableOpacity>
    )
}

// pressable acts up on this. todo: fix it
export default Button;

const styles = StyleSheet.create({
    view: {
        backgroundColor: colors.dark,
        borderRadius: 50,
        width: 200,
        height: 50
    },
    inverseView: {
        backgroundColor: colors.light,
        borderWidth: measures.thickBorder,
        borderColor: colors.dark
    },
    smallView: {
        width: 100,
        borderRadius: 25,
        backgroundColor: colors.dark,
    },
    text: {
        ...calloutText,
        textAlign: "center",
        top: "25%",
        padding: 0,
        margin: 0
    },
    smallText: {
        fontSize: fonts.calloutSize / 1.25
    },
    inverseText: {
        color: colors.dark
    },
    invisibleView: {
        backgroundColor: colors.light,
        borderColor: colors.light
    },
    invisibleText: {
        color: colors.light
    }
})