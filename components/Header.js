import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = ({title}) => {
    return (
        <View style={styles.view}>
            <Text>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        backgroundColor: "#fff",
        fontFamily: "AvenirLTStd-Light"
    }
})

export default Header;