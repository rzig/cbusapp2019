import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colors, fonts, measures} from '../styles/base';
import {flexContainer, bodyText, headerText} from '../styles/mixins';

/**
 * A header-like card that displayes two items side by side
 * @param {object} left  - an object containing two attributes, header
 *                         and subheader, displayed on the left half
 * @param {object} right - just like left, but on the right
 */
const InfoCard = ({left, right}) => {
    return (
        <View style={styles.container}>
            <View style={styles.left}>
                <Text style={styles.header}>{left.header}</Text>
                <Text style={styles.subheader}>{left.subheader}</Text>
            </View>
            <View style={styles.right}>
                <Text style={styles.header}>{right.header}</Text>
                <Text style={styles.subheader}>{right.subheader}</Text>
            </View>
        </View>
    )
}

export default InfoCard;

const styles = StyleSheet.create({
    container: {
        ...flexContainer,
        borderColor: colors.medium,
        borderWidth: 2,
        borderRadius: measures.borderRadius,
        marginBottom: measures.margin,
        width: "100%"
    },
    left: {
        flexGrow: 1
    },
    right: {
        flexGrow: 2
    },
    header: {
        ...headerText,
        textAlign: "center"
    },
    subheader: {
        ...bodyText,
        color: colors.medium,
        textAlign: "center"
    }
});