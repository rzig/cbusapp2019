import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Slider from 'react-native-slider';

const generateValueString = (value, units) => {
    if(units) {
        return value + " " + units;
    } else {
        return value;
    }
}

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
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        paddingBottom: 8,
        marginBottom: 16,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc"
    },
    left: {
        flexGrow: 2
    },
    right: {
        marginLeft: 16,
        width: 100
    },
    name: {
        fontFamily: "AvenirLTStd-Medium",
        fontSize: 16
    },
    value: {
        fontFamily: "AvenirLTStd-Medium",
        color: "#000",
        fontSize: 20,
        textAlign: "center"
    },
    subtitle: {
        fontFamily: "AvenirLTStd-Medium",
        color: "#aaa",
        fontSize: 14,
        textAlign: "center"
    }
});