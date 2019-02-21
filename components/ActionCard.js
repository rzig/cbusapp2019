import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {fonts, colors, measures} from '../styles/base';
import {calloutText} from '../styles/mixins';
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
        borderRadius: measures.borderRadius,
        height: 145
    },
    text: {
        ...calloutText,
        position: "absolute",
        bottom: 0,
        paddingLeft: 10,
        paddingBottom: 10
    }
})

export default pressable(ActionCard);