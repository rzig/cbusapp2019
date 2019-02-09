import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Header = ({title, left, right}) => {
    return (
        <View style={styles.view}>
            <MyIcon icon={left}/>
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
        <Icon name={"ios-cog"} size={30} color={color} style={style}/>
    )
}

const styles = StyleSheet.create({
    view: {
        backgroundColor: "#fff",
        paddingTop: 12,
        paddingBottom: 12,
        display: "flex",
        flexDirection: "row"
    },
    text: {
        color: "#000",
        fontSize: 21,
        textAlign: "center",
        fontFamily: "AvenirLTStd-Light",
        flexGrow: 1,
        padding: 0,
    },
    icon: {
        width: 40,
    },
    rightIcon: {
        textAlign: "right"
    }
})

export default Header;