import React, { Component } from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import {createSwitchNavigator, NavigationActions} from 'react-navigation';
import Slider from 'react-native-slider';
import { colors, measures, fonts } from '../../styles/base';
import { bodyText, flexContainer } from '../../styles/mixins';
import Button from '../../components/Button';
import isX from '../../helpers/isX';
import getString from '../getString';

/**
 * Extends react-navigation's SwitchNavigator. Includes
 * a progress slider at the top (just disabled, visual only),
 * and buttons for navigation at the bottom. Currently does
 * not support animated screen transitions due to limitations of
 * SwitchNavigator. These transitions are theoretically possible
 * if you wrap ALL your screens in a HOC that reads navigation
 * state, but that's not very DRY :/
 * @param {*} routes  - routes avilable
 * @param {*} options - other options
 */
const createProgressNavigator = (routes, options) => {
    const BaseNavigator = createSwitchNavigator(routes, options);
    return class ProgressNavigator extends Component {
        static router = {
            ...BaseNavigator.router
        }

        render() {
            const {navigation}  = this.props;
            const currentState  = navigation.state;
            const currentIndex  = currentState.index
            const currentScreen = currentState.routes[currentIndex];
            const screenCount   = currentState.routes.length - 1;
            const isLastScreen  = currentIndex == screenCount;
            const isFirstScreen = currentIndex == 0;

            let prevScreen;
            let nextScreen;

            if(!(currentIndex + 1 > screenCount)) {
                nextScreen = currentState.routes[currentIndex + 1].routeName;
            }
            if(currentIndex - 1 > -1) {
                prevScreen = currentState.routes[currentIndex - 1].routeName;
            }

            return (
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Slider
                            value={currentIndex}
                            disabled
                            maximumValue={screenCount}
                            animateTransitions={true}
                        />
                        <Text style={styles.text} accessibilityRole="header">
                            {getString(currentScreen.routeName, "header")}
                        </Text>
                    </View>
                    <View style={styles.content}>
                        <BaseNavigator navigation={navigation}/>
                    </View>
                    <View style={styles.footer}>
                        <Button
                            small
                            inverse
                            name={getString("Navigator", "back")}
                            onPress={() => navigation.dispatch(NavigationActions.navigate({routeName: prevScreen}))}
                            invisible={isFirstScreen}
                            description={getString("Navigator", "backDescription")}
                        />
                        <Button
                            small
                            name={getString("Navigator", "next")}
                            onPress={() => navigation.dispatch(NavigationActions.navigate({routeName: nextScreen}))}
                            invisible={isLastScreen}
                            description={getString("Navigator", "nextDescription")}
                        />
                    </View>
                </View>
            )
        }
    }
}

export default createProgressNavigator;

const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        ...flexContainer,
        flexDirection: "column",
        width: "100%",
        height: height,
        ...isX({paddingTop: 22})
    },
    content: {
        height: height - (2.5 * measures.barHeight),
        marginTop: -.25 * measures.barHeight
    },
    header: {
        width: "100%",
        marginBottom: measures.margin,
        height: measures.barHeight,
        padding: 0,
        margin: 0
    },
    footer: {
        ...flexContainer,
        width: "100%",
        height: measures.barHeight,
        padding: 0,
        justifyContent: "space-between"
    },
    text: {
        ...bodyText,
        marginTop: -.25 * measures.margin,
        textAlign: "center",
        padding: 0,
        fontFamily: fonts.bold
    }
});