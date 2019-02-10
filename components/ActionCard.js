import React from 'react';
import {View, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import pressable from '../helpers/pressable';

const ActionCard = ({name, background, onPress}) => {
    return (
        <View style={Object.assign({}, styles.view, {backgroundColor: background})} onPress={onPress}>
            <Text style={styles.text}>{name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        width: 145,
        borderRadius: 16,
        height: 145
    },
    text: {
        position: "absolute",
        bottom: 0,
        fontFamily: "AvenirLTStd-Medium",
        color: "#fff",
        fontSize: 20,
        paddingLeft: 10,
        paddingBottom: 10
    }
})

export default pressable(ActionCard);