import React, { Component } from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { RNCamera } from 'react-native-camera';
import CircleButton from '../components/CircleButton';
import { colors, measures } from '../styles/base';
import { bodyText, flexContainer } from '../styles/mixins';
import getString from '../helpers/getString';

class Plan extends Component {
    render() {
        return (
            <View>
                <Text style={styles.text}>
                    {getString("Plan", "body")}
                </Text>
                <RNCamera
                    ref={ref => this.camera = ref}
                    style={styles.cam}
                    type={RNCamera.Constants.Type.back}
                    flashMode={RNCamera.Constants.FlashMode.off}
                    permissionDialogTitle={getString("Plan", "permissionTitle")}
                    permissionDialogMessage={getString("Plan", "permissionMessage")}
                    captureAudio={false}
                >
                    <View style={styles.bottomBar}>
                        <CircleButton
                            size={50}
                            color={colors.dark}
                            onPress={() => this.capture()}
                            name={getString("Plan", "buttonName")}
                            description={getString("Plan", "buttonDescription")}
                        />
                    </View>
                </RNCamera>
            </View>
        )
    }

    async capture() {
        if(this.camera) {
            const options = {quality: 0.7, base64: true, doNotSave: true}
            const data = await this.camera.takePictureAsync(options)
            /**
             * We send the data here. Omitted because someone's code
             * didn't follow good security practices and i don't feel
             * like redoing it now... If you want it let me know.
             */
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