import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Header from '../components/Header';

export default class Home extends Component {
    render() {
        return (
            <View style={styles.view}>
                <Header title="Home"/>
                <Text style={styles.text}>Hi from home</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    view: {
        backgroundColor: "#fff",
        height: "100%",
        paddingLeft: 8,
        paddingRight: 8
    },
    text: {
        fontFamily: "AvenirLTStd-Medium",
        fontSize: 16
    }
})