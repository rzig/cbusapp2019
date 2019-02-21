import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {colors, fonts, measures} from '../styles/base';
import {flexContainer} from '../styles/mixins';

const Header = ({title, left, right, onLeft}) => {
    return (
        <View style={styles.view}>
            <TouchableOpacity onPress={() => onLeft()}><MyIcon icon={left}/></TouchableOpacity>
            <Text style={styles.text}>{title}</Text>
            <MyIcon icon={right} right/>
        </View>
    )
}

const MyIcon = ({icon, right}) => {
    let color = "#fff";
    if(icon) {
        color = "#000"
    }
    let style = styles.icon;
    if(right) {
        style = Object.assign({}, style, styles.rightIcon);
    }
    return (
        <Icon name={icon || "chevron-left"} size={30} color={color} style={style}/>
    )
}

const styles = StyleSheet.create({
    view: {
        ...flexContainer,
        paddingLeft: measures.margin,
        paddingRight: measures.margin
    },
    text: {
        color: colors.dark,
        fontSize: fonts.calloutSize,
        textAlign: "center",
        fontFamily: fonts.light,
        flexGrow: 1
    },
    icon: {
        width: 40,
    },
    rightIcon: {
        textAlign: "right"
    }
})

export default Header;