import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableHighlight} from 'react-native';
import ActionCard from '../components/ActionCard';
import withHeader from '../helpers/withHeader';

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
                <View
                    style={{borderColor: "#ccc", borderWidth: 2, borderRadius: 16, width: "100%", marginBottom: 16, padding: 12, display: "flex", flexDirection: "row", marginLeft: "auto", marginRight: "auto"}}
                >
                    <View style={{flexGrow: 1}}>
                        <Text style={styles.impactText}>$37</Text>
                        <Text style={styles.subImpactText}>saved monthly</Text>
                    </View>
                    <View style={{flexGrow: 2}}>
                        <Text style={styles.impactText}>25%</Text>
                        <Text style={styles.subImpactText}>less carbon</Text>
                    </View>
                </View>
                <FlatList
                    data={[
                        {name: "Buy Solar", background: "#1E90FF"},
                        {name: "Find a Group", background: "#1E90FF"},
                        {name: "Sell Solar", background: "#1E90FF"},
                        {name: "Savings Calculator", background: "#1E90FF"},
                        {name: "Learn Solar", background: "#1E90FF"},
                        {name: "Plan Solar", background: "#1E90FF"}
                    ]}
                    renderItem={(item, i) => <View style={{marginBottom: 16}}><ActionCard name={item.item.name} background={item.item.background} onPress={() => alert("hey")}/></View>}
                    keyExtractor={(i, k) => i.name}
                    contentContainerStyle={{display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-evenly"}}
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
    },
    impactText: {
        fontFamily: "AvenirLTStd-Medium",
        color: "#000",
        fontSize: 49,
        textAlign: "center"
    },
    subImpactText: {
        fontFamily: "AvenirLTStd-Medium",
        color: "#aaa",
        fontSize: 18,
        textAlign: "center"
    }
});

export default withHeader(Home);