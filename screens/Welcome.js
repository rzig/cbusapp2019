import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import Container from '../components/Container';
import { bodyText } from '../styles/mixins';
import getString from '../helpers/getString';

class Welcome extends Component {
    render() {
        return (
            <Container>
                <Text style={styles.text}>
                    {getString("Welcome", "body")}
                </Text>
            </Container>
        )
    }
}

export default Welcome;

const styles = StyleSheet.create({
    text: {
        ...bodyText
    }
});