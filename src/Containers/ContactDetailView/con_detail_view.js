import React, { Component } from 'react';
import { View, StyleSheet, ActivityIndicator, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ContactDetailAction from '../../Actions/FetchContactDetailActions';

class ContactDetail extends Component {
    constructor(props) {
        super(props);
        this.renderDetail = this.renderDetail.bind(this);
    }
    componentDidMount() {
        console.log('detail opened ' + this.props.contactId)
        this.props.getConDetail(this.props.contactId);
    }
    componentWillReceiveProps(newProps) {
        if (this.props.contactId != newProps.contactId)
            newProps.contactId(newProps.contactId);
    }
    renderDetail() {
        if (!this.props.data.payload)
            return (
                <View>
                    <Text style={styles.fieldName}>Không có dữ liệu</Text>
                </View>
            );
        let payload = this.props.data.payload.data;
        return (
            <View style={styles.detailContainer}>
                <View style={styles.detailRow}>
                    <Text style={styles.fieldName}>Họ và tên: </Text><Text>{payload.name}</Text>
                </View>
                <View style={styles.detailRow}>
                    <Text style={styles.fieldName}>Giới tính: </Text><Text>{payload.gender}</Text>
                </View>
                <View style={styles.detailRow}>
                    <Text style={styles.fieldName}>Email chính: </Text><Text>{payload.email}</Text>
                </View>
                <View style={styles.detailRow}>
                    <Text style={styles.fieldName}>Email Phụ: </Text><Text>{payload.secondaryemail}</Text>
                </View>
                <View style={styles.detailRow}>
                    <Text style={styles.fieldName}>Số điện thoại nhà: </Text><Text>{payload.phone}</Text>
                </View>
                <View style={styles.detailRow}>
                    <Text style={styles.fieldName}>Số điện thoại di động: </Text><Text>{payload.mobile}</Text>
                </View>
                <View style={styles.detailRow}>
                    <Text style={styles.fieldName}>Chức danh/Nghề nghiệp: </Text><Text>{payload.title}</Text>
                </View>
                <View style={styles.detailRow}>
                    <Text style={styles.fieldName}>Phòng: </Text><Text>{payload.department}</Text>
                </View>
                <View style={styles.detailRow}>
                    <Text style={styles.fieldName}>Fax: </Text><Text>{payload.fax}</Text>
                </View>
                <View style={styles.detailRow}>
                    <Text style={styles.fieldName}>Địa chỉ: </Text><Text>{payload.mailingstreet + " " + payload.mailingcity + " " + payload.mailingcountry}</Text>
                </View>
            </View>
        );
    }
    render() {
        return (
            <View>
                {this.props.data.loading ? <ActivityIndicator /> :
                    this.renderDetail()
                }
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        data: state.FetchContactDetailReducer
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getConDetail: ContactDetailAction.doFetchConDetail }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactDetail);

const styles = {
    fieldName: {
        fontWeight: 'bold'
    },
    detailContainer: {
    },
    detailRow: {
        flexDirection: 'row',
    }
}