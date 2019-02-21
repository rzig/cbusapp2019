import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {colors, fonts} from '../styles/base';
import { calloutText } from '../styles/mixins';

const Button = ({name, onPress}) => {
    return (
        <View style={styles.view} onPress={onPress}>
            <Text style={styles.text}>{name}</Text>
        </View>
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
    text: {
        ...calloutText,
        textAlign: "center",
        top: "25%",
        padding: 0,
        margin: 0
    }
})