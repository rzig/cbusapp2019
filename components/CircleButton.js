import React from 'react';
import { View } from 'react-native';
import pressable from '../helpers/pressable';
import Icon from 'react-native-vector-icons/AntDesign'

const OptionalIcon = ({name, size, color}) => {
    if(name) {
        return (
            <View style={{display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "100%"}}>
                <Icon name={name} size={size} color={color}/>
            </View>
        )
    } else {
        return (
            <View/>
        )
    }
}

const CircleButton = ({color, size, onPress, icon, iconColor}) => {
    return (
        <View style={{borderRadius: size, backgroundColor: color, width: size, height: size}} onPress={onPress}>
            <OptionalIcon name={icon} size={.45 * size} color={iconColor}/>
        </View>
    )
}

export default pressable(CircleButton);