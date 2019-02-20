import React from 'react';
import {View} from 'react-native'

const Container = ({children}) => {
    return (
        <View style={{marginLeft: 16, marginRight: 16, height: "100%"}}>
            {children}
        </View>
    )
}

export default Container;