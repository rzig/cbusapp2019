import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableHighlight} from 'react-native';
import ActionCard from '../components/ActionCard';
import withHeader from '../helpers/withHeader';
import posed from 'react-native-pose';
import {Icon} from 'react-native-vector-icons/EvilIcons'

const AnimBox = posed.View({
    out: {marginBottom: 16, left: "300%", transition: {type: "spring", stiffness: 250, damping: 20}},
    in: {marginBottom: 16, left: 0, transition: {type: "spring", stiffness: 250, damping: 20}}
});

const VisibilityBox = posed.View({
    visible: {right: 0, transition: {type: "spring", stiffness: 250, damping: 20}},
    invisible: {left: "500%", transition: {type: "spring", stiffness: 250, damping: 20}}
})

class Buy extends Component {
    static screenInfo = {
        title: "Buy Solar",
        left: "chevron-left",
        onLeft: (nav) => {nav.navigate("Home")}
    }

    state = {
        visible: true
    }

    toggleVisible() {
        this.setState({visible: !this.state.visible});
    }

    componentDidMount() {
        this.setState({cards: "in"})
    }

    navigate(route) {
        // we "slide out"
        this.toggleVisible();
        this.props.navigation.pop();
    }

    render() {
        return (
            <VisibilityBox pose={this.state.visible ? 'visible':'invisible'}>
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
                </View>
            </VisibilityBox>
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

export default withHeader(Buy);