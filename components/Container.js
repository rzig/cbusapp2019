import React from 'react';
import {View, StyleSheet} from 'react-native'
import { colors } from '../styles/base';

/**
 * Creates an element as wide and as tall as the screen
 * @param {*}      children - the child elements to render
 * @param {object} style    - additional styles to apply
 */
const Container = ({children, style={}}) => {
    return (
        <View style={[styles.container, style]}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%",
        backgroundColor: colors.light
    }
})

export default Container;