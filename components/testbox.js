import React, {Component} from 'react';
import pressable from '../helpers/pressable';
import {TouchableWithoutFeedback, View, Text} from 'react-native';

const TestBox = ({onPress}) => {
    return (
        <View style={{width: 200, height: 200, backgroundColor: "#ff0000"}} onPress={onPress}>
            <Text style={{color: "white", fontSize: 30}}>Hi</Text>
        </View>
    );
}

export default pressable(TestBox);