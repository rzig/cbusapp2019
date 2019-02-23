/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from './screens/Home';
import Buy from './screens/Buy';
import Plan from './screens/Plan';
import NavigationService from './NavigationService';


const AppNavigator = createStackNavigator({
  Home: {
    screen: Home
  },
  Buy: {
    screen: Buy
  },
  Plan: {
    screen: Plan
  }
}, {initialRouteName: "Home"});

let AppContainer = createAppContainer(AppNavigator);

class App extends Component {
  render() {
    return (
      <AppContainer ref={navRef => NavigationService.setTopLevelNavigator(navRef)}/>
    )
  }
}

export default App;