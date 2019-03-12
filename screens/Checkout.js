import React, { Component } from 'react';
import { ScrollView, Text, StyleSheet, Dimensions, KeyboardAvoidingView } from 'react-native';
import { bodyText } from '../styles/mixins';
import Input from '../components/Input';
import { measures } from '../styles/base';
import getString from '../helpers/getString';

class Checkout extends Component {
    state = {
        card: "",
        expireYear: "",
        expireMonth: "",
        addressOne: "",
        addressTwo: "",
        city: "",
        state: "",
        zip: ""
    }
    render() {
        return (
            <KeyboardAvoidingView enabled behavior="padding">
                <ScrollView style={styles.container}>
                    <Input
                        number
                        value={this.state.card}
                        onChange={(v) => this.setState({card: v})}
                        label={getString("Checkout", "card")}
                        type="creditCardNumber"
                    />
                    <Input
                        number
                        value={this.state.expireYear}
                        onChange={v => this.setState({expireYear: v})}
                        label={getString("Checkout", "expirationYear")}
                    />
                    <Input
                        number
                        value={this.state.expireMonth}
                        onChange={v => this.setState({expireMonth: v})}
                        label={getString("Checkout", "expirationMonth")}
                    />
                    <Input
                        value={this.state.addressOne}
                        onChange={v => this.setState({addressOne: v})}
                        label={getString("Checkout", "addressOne")}
                        type="streetAddressLine1"
                    />
                    <Input
                        value={this.state.addressTwo}
                        onChange={v => this.setState({addressTwo: v})}
                        label={getString("Checkout", "addressTwo")}
                        type="streetAddressLine2"
                    />
                    <Input
                        value={this.state.city}
                        onChange={v => this.setState({city: v})}
                        label={getString("Checkout", "city")}
                        type="addressCity"
                    />
                    <Input
                        value={this.state.state}
                        onChange={v => this.setState({state: v})}
                        label={getString("Checkout", "state")}
                        type="addressState"
                    />
                    <Input
                        number
                        value={this.state.zip}
                        onChange={v => this.setState({zip: v})}
                        label={getString("Checkout", "zipcode")}
                    />
                </ScrollView>
            </KeyboardAvoidingView>
        )
    }
}

export default Checkout;

const {width, height} = Dimensions.get("window");
const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        width: width - (2 * measures.margin),
        height: "100%"
    },
    text: {
        ...bodyText
    }
});