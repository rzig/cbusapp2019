import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, ScrollView } from 'react-native';
import { bodyText } from '../styles/mixins';
import { colors, measures } from '../styles/base';
import Group from '../components/Group';
import GroupModal from '../components/GroupModal';
import {connect} from 'react-redux';
import setPreference from '../actions/setPreference';
import setGraphics from '../actions/setGraphics';
import loadGroups from '../actions/loadGroups';
import InfoDisplay from '../components/InfoDisplay';

const mapStateToProps = (state) => {
    return {
        groups: state.groups.groups,
        groupCode: state.preferences.groupCode,
        displayGroups: !state.graphics.grayGroups,
        loading: !state.groups.loaded,
        error: state.groups.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setPreference: (p, v) => dispatch(setPreference(p, v)),
        setGraphics: (k, v) => dispatch(setGraphics(k, v)),
        loadGroups: () => dispatch(loadGroups())
    }
}

class Groups extends Component {
    componentWillMount() {
        this.props.loadGroups();
    }

    state = {
        groupsEnabled: true,
        open: ""
    }

    validCodes = []

    handleCodeChg(newVal) {
        this.props.setPreference("groupCode", newVal);
        if(this.validCodes.indexOf(newVal) !== -1) {
            this.props.setGraphics("grayGroups", true);
            this.setState({open: newVal});
        } else {
            this.props.setGraphics("grayGroups", false);
        }
    }

    onJoin(g) {
        this.setState({open: ""}, () => {
            this.props.setPreference("group", g);
            this.props.navigation.navigate("Plan");
        });
    }

    render() {
        if(this.props.loading) {
            return <InfoDisplay message="Loading..."/>
        }
        if(this.props.error) {
            return <ErrorDisplay message="Error loading data. Please try again later."/>
        }
        return (
            <View style={{display: "flex", flexDirection: "column"}}>
                <Text style={styles.text}>
                    A group is who you'll buy solar with. If you've received
                    a group code in the mail, you can enter it below. If you haven't,
                    feel free to browse groups below.
                </Text>
                <TextInput
                    onChangeText={n => this.handleCodeChg(n)}
                    value={this.props.groupCode}
                    style={styles.input}
                    placeholder={"Group Name"}
                >

                </TextInput>
                <ScrollView style={styles.list} scrollEnabled={this.props.displayGroups}>
                    {this.props.groups.map((g,i) => this.renderGroup(g, i))}
                </ScrollView>
                {this.props.groups.map((g, i) => this.renderModal(g, i))}
            </View>
        )
    }

    renderGroup(g, i) {
        // Here, we do something pretty neat. We "lazy-load"
        // a list of groups that can be entered. Given that the
        // state w/ groups can update - even when not on this screen,
        // it is most efficent to build the array of hidden group codes
        // here. Additionally, it enforces separation of concerns - other
        // screens do not need access to this list, and this list is not
        // important to the overall application. Therefore, it should only exist
        // in this component.
        //
        // Also - we *don't* want to use state for this. Everytime we call
        // setState, it triggers a re-render. So, when we are calling renderGroup
        // for each group, it will set the state, and trigger a re-render. As a result,
        // using state to store validCodes will result in an infinite loop.
        if(!g.private) {
            return <Group name={g.name} enabled={this.props.displayGroups} key={g.code} onOpen={() => this.setState({open: g.code})}/>
        } else {
            this.validCodes.push(g.code);
            return <View key={g.code}/>
        }
    }

    renderModal(g, i) {
        // We render the modal components for every group,
        // even if the group is private. Then, when the user
        // enters a hidden code, we can display the modal
        // for that hidden group.
        return (
            <GroupModal
                group={g}
                open={this.state.open == g.code}
                onJoin={() => this.onJoin(g)}
                onClose={() => this.setState({open: -1})}
                key={g.code}
            />
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Groups);

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
});