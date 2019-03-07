import React from 'react';
import { StyleSheet, View, TextInput, Text } from 'react-native';
import { measures, colors } from '../styles/base';
import { bodyText, flexContainer } from '../styles/mixins';

const Input = ({value, number=false, onChange, label, type="none"}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>
                {label}
            </Text>
            <TextInput
                value={value}
                onChangeText={onChange}
                style={styles.input}
                keyboardType={number ? "numeric" : "default"}
                textContentType={type}
            />
        </View>
    )
}

export default Input;

const styles = StyleSheet.create({
    container: {
        ...flexContainer,
        margin: 0,
        marginRight: .5 * measures.margin
    },
    input: {
        borderWidth: measures.thickBorder,
        borderRadius: measures.borderRadius,
        width: "67.5%",
        height: 52,
        ...bodyText,
        padding: .5 * measures.margin,
        textAlign: "right"
    },
    label: {
        ...bodyText,
        marginRight: measures.margin,
        width: "33.5%",
        textAlign: "right"
    }
})