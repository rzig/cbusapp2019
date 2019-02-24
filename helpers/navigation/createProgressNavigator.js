import React, { Component } from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import {createSwitchNavigator, NavigationActions} from 'react-navigation';
import Slider from 'react-native-slider';
import { colors, measures, fonts } from '../../styles/base';
import { bodyText, flexContainer } from '../../styles/mixins';
import Button from '../../components/Button';

const createProgressNavigator = (routes, options) => {
    const BaseNavigator = createSwitchNavigator(routes, options);
    return class ProgressNavigator extends Component {
        static router = {
            ...BaseNavigator.router
        }
        
        render() {
            const {navigation} = this.props;
            const currentState  = navigation.state;
            const currentIndex  = currentState.index
            const currentScreen = currentState.routes[currentIndex];
            const screenCount   = currentState.routes.length - 1;

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
                        <Text style={styles.text}>
                            {currentScreen.routeName}
                        </Text>
                    </View>
                    <View style={styles.content}>
                        <BaseNavigator navigation={navigation}/>
                    </View>
                    <View style={styles.footer}>
                        <Button small inverse name="Back" onPress={() => navigation.dispatch(NavigationActions.navigate({routeName: prevScreen}))}/>
                        <Button small name="Next" onPress={() => navigation.dispatch(NavigationActions.navigate({routeName: nextScreen}))}/>
                    </View>
                </View>
            )
        }
    }
}

export default createProgressNavigator;

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        ...flexContainer,
        flexDirection: "column",
        width: "100%",
        height: height
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
        display: "flex",
        width: "100%",
        height: measures.barHeight,
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: colors.light,
        alignItems: "center"
    },
    text: {
        ...bodyText,
        marginTop: -.25 * measures.margin,
        textAlign: "center",
        padding: 0
    }
})