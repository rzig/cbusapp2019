import React, {Component} from 'react';
import {FlatList} from 'react-native';
import ActionCard from '../components/ActionCard';
import withHeader from '../helpers/withHeader';
import posed from 'react-native-pose';
import InfoCard from '../components/InfoCard';
import Container from '../components/Container';

const AnimBox = posed.View({
    out: {marginBottom: 16, left: "300%", transition: {type: "spring", stiffness: 250, damping: 20}},
    in: {marginBottom: 16, left: 0, transition: {type: "spring", stiffness: 250, damping: 20}}
});

class Home extends Component {
    static screenInfo = {
        title: "Home"
    }

    state = {
        cards: "out"
    }

    componentDidMount() {
        this.setState({cards: "in"})
    }

    navigate(route) {
        this.props.navigation.navigate(route);
    }

    render() {
        return (
            <Container>
                <InfoCard
                    left={{header: "$37", subheader: "saved monthly"}}
                    right={{header: "25%", subheader: "less carbon"}}
                />
                <FlatList
                    data={[
                        {name: "Buy Solar", background: "#1E90FF", onPress: () => this.navigate("Buy")},
                        {name: "Find a Group", background: "#1E90FF", onPress: () => this.navigate("Buy")},
                        {name: "Sell Solar", background: "#1E90FF", onPress: () => this.navigate("Buy")},
                        {name: "Savings Calculator", background: "#1E90FF", onPress: () => this.navigate("Buy")},
                        {name: "Learn Solar", background: "#1E90FF", onPress: () => this.navigate("Buy")},
                        {name: "Plan Solar", background: "#1E90FF", onPress: () => this.navigate("Plan")}
                    ]}
                    renderItem={(item, i) => <AnimBox pose={this.state.cards}><ActionCard name={item.item.name} background={item.item.background} onPress={item.item.onPress}/></AnimBox>}
                    keyExtractor={(i, k) => i.name}
                    contentContainerStyle={{display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-evenly"}}
                />
            </Container>
        )
    }
}

export default withHeader(Home);