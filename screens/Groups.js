import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { bodyText } from '../styles/mixins';
import Container from '../components/Container';

class Groups extends Component {
    render() {
        return (
            <Container>
                <Text style={styles.text}>
                    A group is who you'll buy solar with. If you've received
                    a group code in the mail, you can enter it below. If you haven't,
                    feel free to browse groups below.
                </Text>
            </Container>
        )
    }
}

export default Groups;

const styles = StyleSheet.create({
    text: {
        ...bodyText
    }
})