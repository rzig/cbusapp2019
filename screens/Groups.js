import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, TextInput, View, Dimensions, ScrollView } from 'react-native';
import { bodyText } from '../styles/mixins';
import Container from '../components/Container';
import { colors, measures } from '../styles/base';
import Group from '../components/Group';

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
        groupsEnabled: true,
        modalOpen: -1
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

    onListLayout(e) {
        const {x, y} = e.nativeEvent.layout;
    }

    toggleModal(i) {
        if(this.state.modalOpen !== -1) {
            this.setState({modalOpen: -1});
        } else {
            this.setState({modalOpen: i});
        }
    }

    render() {
        let open = this.state.modalOpen > -1;
        const ListContainer = open ? View : ScrollView;
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
                <ListContainer style={[styles.list, open ? styles.openList : {}]} onLayout={e => this.onListLayout(e)}>
                    <Group
                        name="Hi"
                        joined={false}
                        enabled={this.state.groupsEnabled}
                        open={this.state.modalOpen == 0}
                        onOpen={() => this.toggleModal(0)}
                        onClose={() => this.toggleModal(0)}
                    />
                    <Group
                        name="Bye"
                        joined={false}
                        enabled={this.state.groupsEnabled}
                        open={this.state.modalOpen == 1}
                        onOpen={() => this.toggleModal(1)}
                        onClose={() => this.toggleModal(1)}
                    />
                    <Group
                        name="Hello"
                        joined={false}
                        enabled={this.state.groupsEnabled}
                        open={this.state.modalOpen == 2}
                        onOpen={() => this.toggleModal(2)}
                        onClose={() => this.toggleModal(2)}
                    />
                    <Group
                        name="Goodbye"
                        joined={false}
                        enabled={this.state.groupsEnabled}
                        open={this.state.modalOpen == 3}
                        onOpen={() => this.toggleModal(3)}
                        onClose={() => this.toggleModal(3)}
                    />
                </ListContainer>
            </View>
        )
    }

    renderGroup(group) {
        return (
            <Group
                enabled={this.state.groupsEnabled}
                name={group.name}
                joined={false}
            />
        )
    }
}

export default Groups;

const {height, width} = Dimensions.get("window")

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
        paddingRight: 2 * measures.margin,
        height: 200
    },
    openList: {
        position: "absolute",
        top: -1 * measures.barHeight - (measures.margin * 2.5),
        left: -12,
        zIndex: 1111,
        height: height,
        width: width
    }
})