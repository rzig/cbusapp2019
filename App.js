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
import Header from './components/Header';


const AppNavigator = createStackNavigator({
  Home: {
    screen: Home
  }
}, {initialRouteName: "Home"});

export default createAppContainer(AppNavigator);