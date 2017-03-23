import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import ContactDetailView from '../../Containers/ContactDetailView/con_detail_view';

const iconSAF = require("../../asset/pictures/logo.png");

export default class ContactDetail extends Component {
    constructor(props) {
        super(props);
        this.goBack=this.goBack.bind(this);
    }
    goBack() {
        this.props.navigator.pop();
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.backbtn} onPress={this.goBack}>
                        <Icon
                            name='arrow-back'
                            color='#00aced' />
                    </TouchableOpacity>
                    <View style={styles.logoContainer}>
                        <Image style={styles.iconSAF} source={iconSAF} resizeMode="contain" />
                    </View>
                </View>
                <View style={styles.detailView}>
                    <ContactDetailView contactId={this.props.contactId} navigator={this.props.navigator}/>
                </View>
            </View>);
    }
}

const styles = {
    container: {
        flex: 1
    },
    header: {
        height: "10%",
        flexDirection: 'row',
        justifyContent: 'flex-start',
        backgroundColor: '#F6F6F6'
    },
    detailView: {
        height: "85%",
        backgroundColor: '#F6F6F6'
    },
    logoContainer: {
        width: "110%",
        justifyContent: 'center',
    },
    iconSAF: {
        width: "70%",
        height: "70%"
    },
    backbtn: {
        width: "10%",
        justifyContent: 'center',
    }
}