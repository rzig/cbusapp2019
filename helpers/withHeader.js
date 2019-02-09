import React, {Component} from 'react';
import Header from '../components/Header';

/**
 * With a StackNavigator, we want to define our own header 
 * component (the built in one is ugly). However, the documentation
 * is crap: the "header" navigation option should be able to use
 * the title from navigationOptions, but I can't figure out how.
 * So, I made this. The component will set a routeOptions config with
 * title and left/right options, and this will convert that into something
 * that react-navigation likes. It's a bit hacky but, hey, it works.
 * @param {Component} WrappedComponent 
 */
const withHeader = (WrappedComponent) => {
    return class EnhancedComponent extends WrappedComponent {
        static navigationOptions = {
            header: <Header title={WrappedComponent.screenInfo.title} left={WrappedComponent.screenInfo.left} right={WrappedComponent.screenInfo.right}/>
        }
    }
}

export default withHeader;