import React from 'react';
import {View, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native';

const ActionCard = ({name, background, onPress}) => {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={Object.assign({}, styles.view, {backgroundColor: background})}>
                <Text style={styles.text}>{name}</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    view: {
        width: "100%",
        borderRadius: 16,
        height: 200,
        marginBottom: 16
    },
    text: {
        position: "absolute",
        bottom: 0,
        fontFamily: "AvenirLTStd-Medium",
        color: "#fff",
        fontSize: 35,
        paddingLeft: 10,
        paddingBottom: 10
    }
})

export default ActionCard;