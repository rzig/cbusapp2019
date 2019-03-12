import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import Container from '../components/Container';
import { bodyText } from '../styles/mixins';

/**
 * Fullscreen component intended to be used while
 * waiting for data, displaying errors, etc
 * @param {string} message - message to display
 */
class InfoDisplay extends Component {
    render() {
        return (
            <Container style={styles.container}>
                <Text style={styles.text}>{this.props.message}</Text>
            </Container>
        )
    }
}

export default InfoDisplay;

const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        ...bodyText,
        textAlign: "center"
    }
})