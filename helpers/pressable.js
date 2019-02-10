import React, {Component} from 'react';
import {View, TouchableWithoutFeedback} from 'react-native';
import posed from 'react-native-pose';

const PoseBox = posed.View({
    big: {width: "100%", height: "100%", marginLeft: "0%", marginRight: "0%", marginTop: "0%", marginBottom: "0%"},
    small: {width: "90%", height: "90%", marginLeft: "5%", marginRight: "5%", marginTop: "5%", marginBottom: "5%"}
});

// Got this from here: 
// https://blog.callstack.io/sweet-render-hijacking-with-react-bb2b81d8d9be
const isClassComponent = (c) => {
    return Boolean(c.prototype && c.prototype.isReactComponent);
}

const emptyFn = () => {};

/**
 * This will enable a button press effect,
 * making the provided component appear smaller
 * when a finger is down on it. This assumes that the
 * top level component in WrappedComponent's render has
 * an explicitly defined width (ie 200, not "10%")
 * @param {Component} WrappedComponent 
 */
const pressable = (WrappedComponent) => {
    let extendFrom = Component;
    if(isClassComponent(WrappedComponent)) {
        extendFrom = WrappedComponent;
    }
    return class Enhance extends extendFrom {
        state = {
            shrunk: false
        }

        toggle() {
            this.setState({shrunk: !this.state.shrunk});
        }

        render() {
            // Much of this is based off an awesome writeup:            
            // https://medium.com/@franleplant/react-higher-order-components-in-depth-cf9032ee6c3e
            let els = null;
            if(isClassComponent(WrappedComponent)) {
                els = super.render();
            } else {
                els = WrappedComponent(this.props);
            }
            const parentStyle   = {width: els.props.style.width, height: els.props.style.height};
            const newChildStyle = Object.assign({}, els.props.style, {width: "100%", height: "100%"});            
            const newChildProps = Object.assign({}, els.props, {style:newChildStyle})
            const newEls = React.cloneElement(els, newChildProps, els.props.children);
            const pressFn = els.props.onPress || emptyFn;
            return (
                <View style={parentStyle}>
                    <TouchableWithoutFeedback onPressIn={() => this.toggle()} onPressOut={() => {this.toggle(); pressFn()}}>
                        <PoseBox pose={this.state.shrunk ? "small" : "big"}>
                            {newEls}
                        </PoseBox>
                    </TouchableWithoutFeedback>
                </View>
            )
        }
    }
}

export default pressable;