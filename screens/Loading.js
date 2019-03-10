import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import Container from '../components/Container';
import { bodyText } from '../styles/mixins';

class Loading extends Component {
    render() {
        return (
            <Container>
                <Text>Loading...</Text>
            </Container>
        )
    }
}

export default Loading;

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