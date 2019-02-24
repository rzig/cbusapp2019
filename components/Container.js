import React from 'react';
import {View} from 'react-native'

const Container = ({children}) => {
    return (
        <View style={{height: "100%", width: "100%"}}>
            {children}
        </View>
    )
}

export default Container;