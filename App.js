/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import Buy from './screens/Buy';
import Plan from './screens/Plan';
import NavigationService from './NavigationService';
import createProgressNavigator from './helpers/navigation/createProgressNavigator';

const routes = {
  Plan: {
    screen: Plan
  },
  Buy: {
    screen: Buy
  }
};

const AppNavigator = createProgressNavigator(routes, {initialRouteName: "Plan"});

let AppContainer = createAppContainer(AppNavigator);

class App extends Component {
  render() {
    return (
      <AppContainer ref={navRef => NavigationService.setTopLevelNavigator(navRef)}/>
    )
  }
}

export default App;