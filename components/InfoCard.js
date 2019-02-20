import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const InfoCard = ({left, right}) => {
    return (
        <View style={styles.container}>
            <View style={styles.left}>
                <Text style={styles.header}>{left.header}</Text>
                <Text style={styles.subheader}>{left.subheader}</Text>
            </View>
            <View style={styles.right}>
                <Text style={styles.header}>{right.header}</Text>
                <Text style={styles.subheader}>{right.subheader}</Text>
            </View>
        </View>
    )
}

export default InfoCard;

const styles = StyleSheet.create({
    container: {
        borderColor: "#ccc",
        borderWidth: 2,
        borderRadius: 16,
        marginLeft: "auto",
        marginRight: "auto",
        display: "flex",
        flexDirection: "row",
        padding: 12,
        marginBottom: 16,
        width: "100%"
    },
    left: {
        flexGrow: 1
    },
    right: {
        flexGrow: 2
    },
    header: {
        fontFamily: "AvenirLTStd-Medium",
        color: "#000",
        fontSize: 49,
        textAlign: "center"
    },
    subheader: {
        fontFamily: "AvenirLTStd-Medium",
        color: "#aaa",
        fontSize: 18,
        textAlign: "center"
    }
});