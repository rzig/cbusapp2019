import React, { Component } from 'react';
import { View, StyleSheet, Text, ImageBackground, Dimensions, TouchableOpacity } from 'react-native';
import { colors, measures, fonts } from '../styles/base';
import posed from 'react-native-pose';

const AnimatedBackground = posed(ImageBackground)({
    enabled: {opacity: 1},
    disabled: {opacity: 0.3}
});

const {height, width} = Dimensions.get("window")

const ContainerView = posed.View({
    open: {
        position: "absolute",
        top: 0,
        left: 0,
        height: height,
        width: width,
        backgroundColor: colors.light,
        zIndex: 11111,
        borderRadius: 0,
        margin: 0
    },
    closed: {
        width: "100%",
        height: 150,
        marginBottom: measures.margin,
        backgroundColor: colors.light
    }
})

class Group extends Component {
    render() {
        const {name, joined, enabled, style, open, onClose, onOpen} = this.props;
        return (
            <ContainerView style={styles.view} pose="closed">
                <TouchableOpacity onPress={onOpen}>
                    <AnimatedBackground
                    source={require("../assets/images/solarplaceholder1.jpg")}
                    style={[styles.view, open ? styles.openImage : {}, {opacity: 0.3}]}
                    imageStyle={open ? styles.openSubImage : styles.subImage}
                    pose={enabled ? "enabled" : "disabled"}
                    >
                        <Text style={styles.text}>{name}</Text>
                    </AnimatedBackground>
                </TouchableOpacity>

                <View style={open ? styles.openDetailsView : styles.detailsView}>
                    <Text>Group info</Text>
                    <TouchableOpacity onPress={onClose}>
                        <Text>Click here to return (temporary).</Text>
                    </TouchableOpacity>
                </View>
            </ContainerView>
        )
    }
}

export default Group;

const styles = StyleSheet.create({
    view: {
        width: "100%",
        height: 150,
        marginBottom: measures.margin,
        backgroundColor: colors.light
    },
    openView: {
        position: "absolute",
        top: 0,
        left: 0,
        height: height,
        width: width,
        backgroundColor: colors.light,
        zIndex: 11111,
        borderRadius: 0,
        margin: 0
    },
    text: {
        color: colors.light,
        fontSize: fonts.bodySize * 2,
        fontFamily: fonts.primary,
        textAlign: "center",
        top: "30%",
        textShadowColor: colors.dark,
        textShadowOffset: {width: 0.1, height: 0.1},
        textShadowRadius: 10,
        margin: 0,
        padding: 0
    },
    openImage: {
        height: 150
    },
    subImage: {
        borderRadius: measures.borderRadius
    },
    openSubImage: {
        borderRadius: 0
    },
    detailsView: {
        display: "none"
    },
    openDetailsView: {
        display: "flex",
        flexDirection: "column"
    }
});