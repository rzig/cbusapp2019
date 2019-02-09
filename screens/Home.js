import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import Header from '../components/Header';
import ActionCard from '../components/ActionCard';

export default class Home extends Component {
    static navigationOptions = {
        title: "Home",
        header: <Header title="Home" left={{name: "ios-cog"}}/>
    }
    render() {
        alert(this.props.navigation.getParam("testParam"))
        return (
            <View style={styles.view}>
                <FlatList
                    data={[
                        {name: "Buy Solar", background: "#1E90FF"},
                        {name: "Join a Group", background: "#1E90FF"},
                        {name: "Savings Calculator", background: "#1E90FF"}
                    ]}
                    renderItem={(item, i) => <ActionCard name={item.item.name} background={item.item.background}/>}
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