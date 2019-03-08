import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Container from '../components/Container';
import CircleButton from '../components/CircleButton';
import { bodyText } from '../styles/mixins';

class Welcome extends Component {
    render() {
        return (
            <Container>
                <Text style={styles.text}>
                    Welcome to Group Solar! We'll walk you through the whole
                    process - from planning to buying to installing. When you're
                    ready to start your solar future, press Next!
                    {this.props.testVar}
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
