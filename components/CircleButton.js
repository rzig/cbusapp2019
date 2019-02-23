import React from 'react';
import { View } from 'react-native';
import pressable from '../helpers/pressable';

const CircleButton = ({color, size, onPress}) => {
    return (
        <View style={{borderRadius: size, backgroundColor: color, width: size, height: size}} onPress={onPress}>
        </View>
    )
}

export default pressable(CircleButton);