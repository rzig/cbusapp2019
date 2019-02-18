import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import withHeader from '../helpers/withHeader';
import Slider from 'react-native-slider';
import Button from '../components/Button';

class Buy extends Component {
    static screenInfo = {
        title: "Buy Solar",
        left: "chevron-left",
        onLeft: (nav) => {nav.navigate("Home")}
    }

    state = {
        minSolarPanels: 10,
        maxSolarPanels: 43,
        solarPanels:    13,
        perSolarPanelCost: 254,
        kwhPerPanel: 1,
        kwhUsed: 900,
        excessToSell: 0
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
        const rawCost = this.state.perSolarPanelCost * this.state.solarPanels;
        const percentageSold = this.state.excessToSell / 100;
        const finalCost = rawCost - (percentageSold * rawCost);
        return (
            <View style={styles.view}>
                <View
                    style={{borderColor: "#ccc", borderWidth: 2, borderRadius: 16, width: "100%", marginBottom: 16, padding: 12, display: "flex", flexDirection: "row", marginLeft: "auto", marginRight: "auto"}}
                >
                    <View style={{flexGrow: 1}}>
                        <Text style={styles.impactText}>{numberWithCommas(Math.round(finalCost))}</Text>
                        <Text style={styles.subImpactText}>upfront cost</Text>
                    </View>
                    <View style={{flexGrow: 2}}>
                        <Text style={styles.impactText}>1,000</Text>
                        <Text style={styles.subImpactText}>saved per year</Text>
                    </View>
                </View>
                <View style={styles.inputContainer}>
                    <View style={{flexGrow: 2}}>
                        <Text style={styles.text}>Number of solar panels</Text>
                        <Slider minimumValue={this.state.minSolarPanels} maximumValue={this.state.maxSolarPanels} value={this.state.solarPanels} step={1} onValueChange={n => this.setState({solarPanels: n})}/>
                    </View>
                    <View style={styles.rightInput}>
                        <Text style={Object.assign({}, styles.impactText, {fontSize: 20})}>{this.state.solarPanels}</Text>
                        <Text style={Object.assign({}, styles.subImpactText, {fontSize: 14})}>{"$" + this.state.perSolarPanelCost + " each"}</Text>
                    </View>
                </View>
                <View style={styles.inputContainer}>
                    <View style={{flexGrow: 2}}>
                        <Text style={styles.text}>Your energy usage</Text>
                        <Slider minimumValue={0} maximumValue={2000} value={this.state.kwhUsed} step={10} onValueChange={n => this.setState({kwhUsed: n})}/>
                    </View>
                    <View style={styles.rightInput}>
                        <Text style={Object.assign({}, styles.impactText, {fontSize: 20})}>{(this.state.kwhUsed) + " kWh"}</Text>
                        <Text style={Object.assign({}, styles.subImpactText, {fontSize: 14})}>per month</Text>
                    </View>
                </View>
                <View style={styles.inputContainer}>
                    <View style={{flexGrow: 2}}>
                        <Text style={styles.text}>Solar energy to sell upfront</Text>
                        <Slider minimumValue={0} maximumValue={60} value={this.state.excessToSell} step={1} onValueChange={n => this.setState({excessToSell: n})}/>
                    </View>
                    <View style={styles.rightInput}>
                        <Text style={Object.assign({}, styles.impactText, {fontSize: 20})}>{(this.state.excessToSell) + "%"}</Text>
                        <Text style={Object.assign({}, styles.subImpactText, {fontSize: 14})}>per month</Text>
                    </View>
                </View>
                <View style={{backgroundColor: "#ff000", position: "absolute", bottom: 0, margin: 16, right: 0}}>
                    <View style={{display: "flex", marginBottom: 8, flexDirection: "row", marginLeft: 16, marginRight: 16}}>
                        <Text style={Object.assign({}, styles.subImpactText, {fontSize: 16, marginRight: 16, flexGrow: 1, textAlign: "left"})}>Total cost</Text>
                        <Text style={Object.assign({}, styles.impactText, {fontSize: 16, textAlign: "right"})}>$4500</Text>
                    </View>
                    <Button name="Buy Solar"/>
                </View>
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
    inputContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        paddingBottom: 8,
        marginBottom: 16,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc"
    },
    rightInput: {
        marginLeft: 16,
        width: 92
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

function numberWithCommas(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}

export default withHeader(Buy);