import React from 'react';
import { View, StyleSheet, Text, ImageBackground } from 'react-native';
import { colors, measures, fonts } from '../styles/base';
import posed from 'react-native-pose';

const AnimatedBackground = posed(ImageBackground)({
    enabled: {opacity: 1},
    disabled: {opacity: 0.3}
});

const Group = ({name, joined, enabled, style}) => {
    return (
        <View style={Object.assign({}, styles.view, style)}>
            <AnimatedBackground
              source={require("../assets/images/solarplaceholder1.jpg")}
              style={Object.assign({}, styles.view, {opacity: 0.3})}
              imageStyle={{borderRadius: measures.borderRadius}}
              pose={enabled ? "enabled" : "disabled"}
            >
                <Text style={styles.text}>{name}</Text>
            </AnimatedBackground>
        </View>
    )
}

export default Group;

const styles = StyleSheet.create({
    view: {
        width: "100%",
        height: 150,
        marginBottom: measures.margin,
        borderRadius: measures.borderRadius,
        backgroundColor: colors.light
    },
    text: {
        color: colors.light,
        fontSize: fonts.bodySize * 2,
        fontFamily: fonts.primary,
        textAlign: "center",
        top: "30%",
        textShadowColor: colors.dark,
        textShadowOffset: {width: 0.1, height: 0.1},
        textShadowRadius: 10
    }
});