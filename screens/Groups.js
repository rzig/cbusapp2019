import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, ScrollView } from 'react-native';
import { bodyText } from '../styles/mixins';
import Container from '../components/Container';
import { colors, measures } from '../styles/base';
import Group from '../components/Group';
import Icon from 'react-native-vector-icons/AntDesign';
import GroupModal from '../components/GroupModal';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    return {
        groups: state.groups.groups
    }
}

class Groups extends Component {
    state = {
        validCodes: ["asdf"],
        groupsEnabled: true,
        open: -1
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

    onJoin(g) {
        this.setState({open: -1}, () => {
            this.props.navigation.navigate("Plan")
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
                <ScrollView style={styles.list} scrollEnabled={this.state.groupsEnabled}>
                    {this.props.groups.map((g,i) => this.renderGroup(g, i))}
                </ScrollView>
                {this.props.groups.map((g, i) => this.renderModal(g, i))}
            </View>
        )
    }

    renderGroup(g, i) {
        return <Group name={g.name} enabled={this.state.groupsEnabled} key={g.name} onOpen={() => this.setState({open: i})}/>
    }

    renderModal(g, i) {
        return (
            <GroupModal
                group={g}
                open={this.state.open == i}
                onJoin={() => this.onJoin(g)}
                onClose={() => this.setState({open: -1})}
                key={g.name}
            />
        )
    }
}

export default connect(mapStateToProps)(Groups);

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
        width: "100%",
        height: "100%"
    }
})
