import React, { Component } from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { RNCamera } from 'react-native-camera';
import Container from '../components/Container';
import withHeader from '../helpers/withHeader';
import { colors } from '../styles/base';

class Plan extends Component {
    static screenInfo = {
        title: "Plan",
        left: "chevron-left",
        onLeft: (nav) => nav.navigate("Home")
    }

    render() {
        return (
            <Container style={styles.container}>
                <RNCamera
                    ref={ref => this.camera = ref}
                    style={styles.cam}
                    type={RNCamera.Constants.Type.back}
                    flashMode={RNCamera.Constants.FlashMode.off}
                    permissionDialogTitle="Permission to use camera"
                    permissionDialogMessage="Please say yes"
                    captureAudio={false}
                >
                    <View style={{flex: 0, flexDirection: "row", justifyContent: "center"}}>
                        <TouchableOpacity onPress={() => this.capture()}>
                            <Text>Snap?</Text>
                        </TouchableOpacity>
                    </View>
                </RNCamera>
            </Container>
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
    }
});

export default withHeader(Plan);