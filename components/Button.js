import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import pressable from '../helpers/pressable';

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
        backgroundColor: "#333",
        borderRadius: 50,
        width: 200,
        height: 50
    },
    text: {
        color: "white",
        textAlign: "center",
        fontFamily: "AvenirLTStd-Medium",
        top: "25%",
        padding: 0,
        margin: 0,
        fontSize: 20
    }
})