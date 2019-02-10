import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableHighlight} from 'react-native';
import ActionCard from '../components/ActionCard';
import withHeader from '../helpers/withHeader';
import TestBox from '../components/testbox';

class Home extends Component {
    static screenInfo = {
        title: "Home",
        left: {name: "ios-cog"}
    }

    state = {
        visible: true
    }

    toggleVisible() {
        this.setState({visible: !this.state.visible});
    }

    render() {
        return (
            <View style={styles.view}>
                <FlatList
                    data={[
                        {name: "Buy Solar", background: "#1E90FF"},
                        {name: "Join a Group", background: "#1E90FF"},
                        {name: "Savings Calculator", background: "#1E90FF"}
                    ]}
                    renderItem={(item, i) => <ActionCard name={item.item.name} background={item.item.background} onPress={() => alert("hey")}/>}
                    keyExtractor={(i, k) => i.name}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    view: {
        backgroundColor: "#fff",
        height: "100%",
        paddingLeft: 16,
        paddingRight: 16
    },
    text: {
        fontFamily: "AvenirLTStd-Medium",
        fontSize: 16
    }
});

export default withHeader(Home);