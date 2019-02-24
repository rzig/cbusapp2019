import React, { Component } from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { RNCamera } from 'react-native-camera';
import Container from '../components/Container';
import CircleButton from '../components/CircleButton';
import withHeader from '../helpers/withHeader';
import { colors, measures } from '../styles/base';
import { bodyText, flexContainer } from '../styles/mixins';

class Plan extends Component {

    render() {
        return (
            <View>
                <Text style={styles.text}>
                    Take between twenty and forty pictures of your home, from multiple angles.
                    Once you're done, press next.
                </Text>
                <RNCamera
                    ref={ref => this.camera = ref}
                    style={styles.cam}
                    type={RNCamera.Constants.Type.back}
                    flashMode={RNCamera.Constants.FlashMode.off}
                    permissionDialogTitle="Permission to use camera"
                    permissionDialogMessage="Please say yes"
                    captureAudio={false}
                >
                    <View style={styles.bottomBar}>
                        <CircleButton size={50} color={colors.dark} onPress={() => this.capture()}/>
                    </View>
                </RNCamera>
            </View>
        )
    }

    async capture() {
        if(this.camera) {
            const options = {quality: 0.7, base64: true, doNotSave: true}
            const data = await this.camera.takePictureAsync(options)
            console.warn(data.base64);
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        backgroundColor: colors.dark
    },
    cam: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center"
    },
    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 20,
    },
    bottomBar: {
        ...flexContainer,
        flex: 0,
        height: 75,
        justifyContent: "center",
        width: "110%",
        padding: 0,
        marginLeft: -1.2  * measures.margin
    },
    text: {
        ...bodyText,
        paddingBottom: .5 * measures.margin,
        backgroundColor: colors.light,
        zIndex: 1000
    }
});

export default Plan;