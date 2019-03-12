import React from 'react';
import { View, StyleSheet, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { colors, measures, fonts } from '../styles/base';
import posed from 'react-native-pose';

const AnimatedBackground = posed(ImageBackground)({
    enabled: {opacity: 1},
    disabled: {opacity: 0.3}
});

/**
 * A box that displays a group's title on top of its background image
 * @param {string}   name    - name of the group
 * @param {boolean}  enabled - whether the image should be grayed out
 * @param {object}   style   - any additional style to add to the view container
 * @param {function} onOpen  - what to do when it is tapped
 * @param {string}   image   - link to the group's image
 */
const Group = ({name, enabled, style, onOpen, image}) => {
    return (
        <TouchableOpacity 
            onPress={onOpen}
            accessibilityLabel={name}
            accessibilityHint="Learn more about the group."
            accessibilityRole="imagebutton"
        >
            <View style={[styles.view, style]}>
                <AnimatedBackground
                source={{uri: image}}
                style={Object.assign({}, styles.view, {opacity: 0.3})}
                imageStyle={{borderRadius: measures.borderRadius}}
                pose={enabled ? "enabled" : "disabled"}
                >
                    <Text style={styles.text}>{name}</Text>
                </AnimatedBackground>
            </View>
        </TouchableOpacity>
    )
}

export default Group;

const styles = StyleSheet.create({
    view: {
        width: "100%",
        height: 150,
        marginBottom: measures.margin,
        borderRadius: measures.borderRadius,
        backgroundColor: colors.light
    },
    text: {
        color: colors.light,
        fontSize: fonts.bodySize * 2,
        fontFamily: fonts.primary,
        textAlign: "center",
        top: "30%",
        textShadowColor: colors.dark,
        textShadowOffset: {width: 0.1, height: 0.1},
        textShadowRadius: 10
    }
});