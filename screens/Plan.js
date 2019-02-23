import React, { Component } from 'react';
import { Text } from 'react-native';
import Container from '../components/Container';
import withHeader from '../helpers/withHeader';

class Plan extends Component {
    static screenInfo = {
        title: "Plan",
        left: "chevron-left",
        onLeft: (nav) => nav.navigate("Home")
    }
    
    render() {
        return (
            <Container>
                <Text>Hello</Text>
            </Container>
        )
    }
}

export default withHeader(Plan);