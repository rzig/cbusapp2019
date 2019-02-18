import React, {Component} from 'react';
import Header from '../components/Header';
import NavigationService from '../NavigationService';

/**
 * React Navigation should (theoretically) allow us
 * to customize all the styles of the header: font family,
 * font size, color, back button component, etc. The built
 * in one is quite ugly, so this is something we need to do.
 * *However*, after following the documentation on how to customize the header,
 * the header style did not change. And, there's really not
 * a good way to tell why, when I dug into the docs I was referred
 * to a 600 line file with 0 comments to find props I could use to style
 * the header. There was no clear list of props in the file that indicated
 * what I should do. As a result, I gave up on that crap and just made my
 * own header component. It's hacky but it works better than the crap from
 * react-navigation.
 * @param {Component} WrappedComponent 
 */
const withHeader = (WrappedComponent) => {
    let info = WrappedComponent.screenInfo;
    return class EnhancedComponent extends WrappedComponent {
        static navigationOptions = {
            header: renderHeader(info)
        }
    }
}

const renderHeader = (info) => {
    return <Header title={info.title} left={info.left} right={info.right} onLeft={() => info.onLeft(NavigationService)}/>;
}

export default withHeader;