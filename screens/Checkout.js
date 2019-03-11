import React, { Component } from 'react';
import { ScrollView, Text, StyleSheet, Dimensions, KeyboardAvoidingView } from 'react-native';
import Container from '../components/Container';
import { bodyText } from '../styles/mixins';
import Input from '../components/Input';
import { measures } from '../styles/base';

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
                        label="Card #"
                        type="creditCardNumber"
                    />
                    <Input
                        number
                        value={this.state.expireYear}
                        onChange={v => this.setState({expireYear: v})}
                        label="Expiriration Year (YYYY)"
                    />
                    <Input
                        number
                        value={this.state.expireMonth}
                        onChange={v => this.setState({expireMonth: v})}
                        label="Expiriration Month (MM)"
                    />
                    <Input
                        value={this.state.addressOne}
                        onChange={v => this.setState({addressOne: v})}
                        label="Address Line One"
                        type="streetAddressLine1"
                    />
                    <Input
                        value={this.state.addressTwo}
                        onChange={v => this.setState({addressTwo: v})}
                        label="Address Line Two"
                        type="streetAddressLine2"
                    />
                    <Input
                        value={this.state.city}
                        onChange={v => this.setState({city: v})}
                        label="City"
                        type="addressCity"
                    />
                    <Input
                        value={this.state.state}
                        onChange={v => this.setState({state: v})}
                        label="State"
                        type="addressState"
                    />
                    <Input
                        number
                        value={this.state.zip}
                        onChange={v => this.setState({zip: v})}
                        label="Zipcode"
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