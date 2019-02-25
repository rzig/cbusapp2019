/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import { createAppContainer } from "react-navigation";
import Buy from './screens/Buy';
import Plan from './screens/Plan';
import Welcome from './screens/Welcome';
import NavigationService from './NavigationService';
import createProgressNavigator from './helpers/navigation/createProgressNavigator';

const routes = {
  Welcome: {
    screen: Welcome
  },
  Plan: {
    screen: Plan
  },
  Buy: {
    screen: Buy
  }
};

const AppNavigator = createProgressNavigator(routes, {initialRouteName: "Welcome"});

let AppContainer = createAppContainer(AppNavigator);

class App extends Component {
  render() {
    return (
      <AppContainer ref={navRef => NavigationService.setTopLevelNavigator(navRef)}/>
    )
  }
}

export default App;