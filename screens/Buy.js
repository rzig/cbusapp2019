import React, {Component} from 'react';
import {Text, StyleSheet} from 'react-native';
import ValueSlider from '../components/ValueSlider';
import InfoCard from '../components/InfoCard';
import Container from '../components/Container';
import { measures, colors } from '../styles/base';
import { captionText, bodyText } from '../styles/mixins';
import { connect } from 'react-redux';
import InfoDisplay from '../components/InfoDisplay';

const mapStateToProps = (state) => {
    return {
        shouldDisplay: !(Object.keys(state.preferences.group).indexOf("code") == -1),
        perSolarPanelCost: state.preferences.group.panel.price
    }
}

class Buy extends Component {
    // we don't put this in redux b/c if the user
    // goes back, they will be changing a group
    // and that will change these values
    state = {
        minSolarPanels: 10,
        maxSolarPanels: 43,
        solarPanels:    13,
        perSolarPanelCost: 254,
        kwhPerPanel: 1,
        kwhUsed: 900,
        excessToSell: 0
    }

    render() {
        if(this.props.shouldDisplay) {
            const rawCost = this.props.perSolarPanelCost * this.state.solarPanels;
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
                        subtitle={"@" + this.props.perSolarPanelCost + " each"}
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
                </Container>

            )
        } else {
            return (
                <InfoDisplay message="Please join a group first."/>
            )
        }
    }
}

function newFunction(state) {
    return state.preferences.group !== {};
}

function numberWithCommas(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}

const styles = StyleSheet.create({
    cart: {
        position: "absolute",
        bottom: 0,
        right: 0,
        marginBottom: measures.margin
    },
    cartItem: {
        display: "flex",
        flexDirection: "row",
        marginBottom: measures.margin / 2,
        marginLeft: measures.margin,
        marginRight: measures.margin
    },
    cartItemName: {
        ...captionText,
        color: colors.dark,
        flexGrow: 2
    },
    cartPrice: {
        ...captionText
    },
    text: {
        ...bodyText,
        textAlign: "center"
    }
})

export default connect(mapStateToProps)(Buy);