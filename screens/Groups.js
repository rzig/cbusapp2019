import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import { bodyText } from '../styles/mixins';
import Container from '../components/Container';
import { colors, measures } from '../styles/base';
import Group from '../components/Group';
import Icon from 'react-native-vector-icons/AntDesign';

class Groups extends Component {
    state = {
        groupName: "",
        groups: [
            {name: "Group 1", joined: false},
            {name: "Group 2", joined: false},
            {name: "Group 3", joined: false},
            {name: "Group 4", joined: false}
        ],
        validCodes: ["asdf"],
        groupsEnabled: true
    }

    handleCodeChg(newVal) {
        this.setState({groupName: newVal}, () => {
            if(this.state.validCodes.indexOf(newVal) !== -1) {
                this.setState({groupsEnabled: false})
            } else {
                this.setState({groupsEnabled: true})
            }
        });
    }

    render() {
        return (
            <View style={{display: "flex", flexDirection: "column"}}>
                <Text style={styles.text}>
                    A group is who you'll buy solar with. If you've received
                    a group code in the mail, you can enter it below. If you haven't,
                    feel free to browse groups below.
                </Text>
                <TextInput
                    onChangeText={n => this.handleCodeChg(n)}
                    value={this.state.text}
                    style={styles.input}
                    placeholder={"Group Name"}
                >
                    
                </TextInput>
                <FlatList
                    data={this.state.groups}
                    renderItem={item => <Group name={item.item.name} enabled={item.joined} enabled={this.state.groupsEnabled}/>}
                    keyExtractor={i => i.name}
                    style={styles.list}
                    extraData={this.state.groupsEnabled}
                    scrollEnabled={this.state.groupsEnabled}
                />
            </View>
        )
    }
}

export default Groups;

const styles = StyleSheet.create({
    text: {
        ...bodyText
    },
    input: {
        borderColor: colors.medium,
        borderRadius: measures.borderRadius,
        borderWidth: measures.thickBorder,
        marginTop: measures.margin,
        paddingLeft: measures.margin,
        ...bodyText,
        height: measures.barHeight / 1.5
    },
    list: {
        marginTop: measures.margin,
        paddingLeft: 2 * measures.margin,
        paddingRight: 2 * measures.margin
    }
})