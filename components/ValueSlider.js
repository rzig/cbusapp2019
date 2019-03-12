import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Slider from 'react-native-slider';
import {colors, fonts, measures} from '../styles/base';
import { flexContainer, captionText } from '../styles/mixins';

const generateValueString = (value, units) => {
    if(units) {
        return value + " " + units;
    } else {
        return value;
    }
}

/**
 * Creates a slider input from a predefined range
 * @param {string}   name     - name of the input (label)
 * @param {string}   subtitle - text displayed below the input value
 * @param {number}   min      - minimum value
 * @param {number}   max      - maximum value
 * @param {number}   step     - how much the values increment as it is slid
 * @param {number}   value    - the current value of the slider
 * @param {string}   units    - units to add after the value
 * @param {function} onChange - what to do when the value changes
 */
const ValueSlider = ({name, subtitle, min, max, step, value, units="", onChange}) => {
    return (
        <View style={styles.container}>
            <View style={styles.left}>
                <Text style={styles.name}>
                    {name}
                </Text>
                <Slider
                    minimumValue={min}
                    maximumValue={max}
                    value={value}
                    step={step}
                    onValueChange={(v) => onChange(v)}
                />
            </View>
            <View style={styles.right}>
                <Text style={styles.value}>
                    {generateValueString(value, units)}
                </Text>
                <Text style={styles.subtitle}>
                    {subtitle}
                </Text>
            </View>
        </View>
    )
}

export default ValueSlider;

const styles = StyleSheet.create({
    container: {
        width: "100%",
        ...flexContainer,
        padding: 0,
        paddingBottom: measures.margin / 2,
        marginBottom: measures.margin,
        borderBottomWidth: 1,
        borderBottomColor: colors.medium
    },
    left: {
        flexGrow: 2
    },
    right: {
        marginLeft: measures.margin,
        width: 100
    },
    name: {
        fontFamily: fonts.primary,
        fontSize: fonts.bodySize - 2
    },
    value: {
        fontFamily: fonts.primary,
        color: colors.dark,
        fontSize: fonts.bodySize + 2,
        textAlign: "center"
    },
    subtitle: {
        ...captionText,
        textAlign: "center"
    }
});