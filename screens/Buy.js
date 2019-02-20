import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import withHeader from '../helpers/withHeader';
import Button from '../components/Button';
import ValueSlider from '../components/ValueSlider';
import InfoCard from '../components/InfoCard';
import Container from '../components/Container';

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
            <Container>
                <InfoCard
                    left={{header: numberWithCommas(Math.round(finalCost)), subheader: "upfront cost"}}
                    right={{header: "1000", subheader: "saved per year"}}
                />
                <ValueSlider
                    name="Number of solar panels"
                    min={this.state.minSolarPanels}
                    max={this.state.maxSolarPanels}
                    step={1}
                    subtitle={"@254 each"}
                    value={this.state.solarPanels}
                    onChange={(n) => this.setState({solarPanels: n})}
                />
                <ValueSlider
                    name="Your energy usage"
                    min={0}
                    max={2000}
                    step={10}
                    subtitle={"per month"}
                    value={this.state.kwhUsed}
                    units="kWh"
                    onChange={(n) => this.setState({kwhUsed: n})}
                />
                <ValueSlider
                    name="Solar energy to sell upfront"
                    min={0}
                    max={60}
                    step={1}
                    subtitle={"per month"}
                    value={this.state.excessToSell}
                    units="%"
                    onChange={(n) => this.setState({excessToSell: n})}
                /> 
                <View style={{backgroundColor: "#ff000", position: "absolute", bottom: 0, margin: 16, right: 0}}>
                    <View style={{display: "flex", marginBottom: 8, flexDirection: "row", marginLeft: 16, marginRight: 16}}>
                        <Text style={Object.assign({}, styles.subImpactText, {fontSize: 16, marginRight: 16, flexGrow: 1, textAlign: "left"})}>Total cost</Text>
                        <Text style={Object.assign({}, styles.impactText, {fontSize: 16, textAlign: "right"})}>$4500</Text>
                    </View>
                    <Button name="Buy Solar"/>
                </View>
            </Container>
        )
    }
}

function numberWithCommas(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}

export default withHeader(Buy);