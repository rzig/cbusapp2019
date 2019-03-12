import React from 'react';
import {Text, StyleSheet, TouchableOpacity, ImageBackground, View, ScrollView, Image} from 'react-native';
import Modal from 'react-native-modal';
import Container from './Container';
import {colors, fonts, measures} from '../styles/base';
import { bodyText, flexContainer } from '../styles/mixins';
import CircleButton from './CircleButton';

/**
 * A modal dialog that displays details about a group
 * @param {object}   group   - the group to be displayed
 * @param {boolean}  open    - whether the modal is open
 * @param {function} onJoin  - what to do when the user selects the check mark
 * @param {function} onClose - what to do when the user dismisses the modal
 */
const GroupModal = ({group, open, onJoin, onClose}) => {
    return (
        <Modal isVisible={open}>
            <Container style={{borderRadius: measures.borderRadius}}>
                <ImageBackground
                  style={styles.headerImage}
                  imageStyle={styles.internalImage}
                  source={{uri: group.image}}
                >
                    <Text style={styles.headerText}>{group.name}</Text>
                </ImageBackground>

                <ScrollView style={styles.body}>
                    <Text style={styles.paragraph}>{group.oneliner}</Text>
                    <View style={styles.solarType}>
                        <Image
                            style={styles.solarImage}
                            source={{uri: group.panel.image}}
                        />
                        <Text style={[styles.paragraph, {marginBottom: 0}]}>{group.panel.name}</Text>
                    </View>
                    <Text style={styles.paragraph}>
                        {group.panel.about}
                    </Text>
                    <Text style={styles.paragraph}>
                        {group.about}
                    </Text>
                </ScrollView>
                <View style={styles.footer}>
                    <CircleButton color={colors.danger} size={50} icon="close" iconColor={colors.light} onPress={onClose}/>
                    <CircleButton color={colors.success} size={50} icon="check" iconColor={colors.light} onPress={onJoin}/>
                </View>
            </Container>
        </Modal>
    )
}

export default GroupModal;

const styles = StyleSheet.create({
    headerImage: {
        width: "100%",
        height: 150,
        borderRadius: measures.borderRadius,
        borderTopRightRadius: measures.borderRadius,
        borderTopLeftRadius: measures.borderRadius,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0
    },
    internalImage: {
        borderRadius: measures.borderRadius,
        borderTopRightRadius: measures.borderRadius,
        borderTopLeftRadius: measures.borderRadius,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0
    },
    headerText: {
        color: colors.light,
        fontSize: fonts.bodySize * 2,
        fontFamily: fonts.primary,
        textAlign: "center",
        top: "30%",
        textShadowColor: colors.dark,
        textShadowOffset: {width: 0.1, height: 0.1},
        textShadowRadius: 10
    },
    body: {
        marginLeft: measures.margin,
        marginRight: measures.margin,
        marginTop: measures.margin,
    },
    paragraph: {
        ...bodyText,
        marginBottom: measures.margin
    },
    solarType: {
        ...flexContainer,
        height: 100,
        borderTopWidth: measures.thinBorder,
        borderTopColor: colors.medium,
        borderBottomWidth: measures.thinBorder,
        borderBottomColor: colors.medium,
        width: "100%",
        justifyContent: "space-between",
        marginBottom: measures.margin
    },
    solarImage: {
        width: 75,
        height: 75
    },
    footer: {
        ...flexContainer,
        bottom: 0,
        width: "100%",
        justifyContent: "space-between",
        margin: 0,
        borderBottomLeftRadius: measures.borderRadius,
        borderBottomRightRadius: measures.borderRadius
    }
});
