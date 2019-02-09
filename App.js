/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import Home from './screens/Home';


const AppNavigator = createSwitchNavigator({
  Home: {
    screen: Home
  }
}, {initialRouteName: "Home"});

export default createAppContainer(AppNavigator);