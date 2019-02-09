import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = ({title}) => {
    return (
        <View style={styles.view}>
            <Text style={styles.text}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        backgroundColor: "#fff",
        paddingTop: 12,
        paddingBottom: 12
    },
    text: {
        textAlign: "center",
        color: "#000",
        fontSize: 21,
        fontFamily: "AvenirLTStd-Light",
    }
})

export default Header;