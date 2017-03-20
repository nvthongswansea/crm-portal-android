import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, RefreshControl, TouchableHighlight, TextInput, Image, Text, TouchableOpacity, ListView, ActivityIndicator, BackAndroid } from 'react-native';
import { connect } from 'react-redux';
import dismissKeyboard from 'react-native-dismiss-keyboard';
import { bindActionCreators } from 'redux';
import FetchContact from '../../Actions/FetchContactsActions';

const { width, height } = Dimensions.get("window");

class ContactList extends Component {
    constructor(props) {
        super(props);
        this.renderContacts = this.renderContacts.bind(this);
        this._onRefresh = this._onRefresh.bind(this);
    }
    componentWillReceiveProps(nextProps) {
        if (this.props.keyword != nextProps.keyword) {
            if (typeof nextProps.keyword === 'string'){
                this.props.doFetch(nextProps.keyword);
            } else {
                this.props.doFetch('');
            }
        }
    }
    _onRefresh() {
        this.props.doFetch(this.props.keyword);
    }
    componentDidMount() {
        this.props.doFetch(this.props.keyword);
    }
    renderRow(data) {
        return (
            <View>
                <TouchableHighlight underlayColor={'dodgerblue'} onPress={() => console.log('pressed')}>
                    <View style={styles.row}>
                        <Text style={styles.text}>
                            <Text style={styles.boldText}>Tên: </Text>{data.name}{"\n"}
                            <Text style={styles.boldText}>Số ĐT: </Text>{data.mobile}{"\n"}
                            <Text style={styles.boldText}>Email: </Text>{data.email}
                        </Text>
                    </View>
                </TouchableHighlight>
            </View>
        );
    }
    renderSeparator(sectionID, rowID, adjacentRowHighlighted) {
        return (
            <View
                key={`${sectionID}-${rowID}`}
                style={{
                    height: adjacentRowHighlighted ? 4 : 1,
                    backgroundColor: adjacentRowHighlighted ? '#3B5998' : '#CCCCCC',
                }}
            />
        );
    }
    renderContacts() {
        if (!this.props.data.payload || !this.props.data.payload.records)
            return (<Text>Không có dữ liệu</Text>);
        var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        return (
            <View>

                <ListView
                    dataSource={ds.cloneWithRows(this.props.data.payload.records)}
                    renderRow={this.renderRow}
                    renderSeparator={this.renderSeparator}
                    refreshControl={
                        <RefreshControl
                            style={styles.list}
                            refreshing={this.props.data.loading}
                            onRefresh={this._onRefresh.bind(this)}
                        />}
                />
            </View>);
    }
    render() {
        return (
            <View>
                {this.props.data.loading ? <View style={styles.loadingIndicator}><ActivityIndicator color="#0000ff" /></View> :
                    this.renderContacts()
                }
            </View>
        );
    }
}

//map state cua he thong thanh props cua component
function mapStateToProps(state) {
    //map state LoginReducer thanh props
    return {
        data: state.FetchContactReducer
    };
}

//map function doLogin tu LoginAction (da import o tren) thanh 1 props
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ doFetch: FetchContact.fetchContacts }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

const styles = {
    loadingIndicator: {
        paddingVertical: 15
    },
    name: {
        fontWeight: 'bold'
    },
    list: {
        width,
        height
    },
    row: {
        flexDirection: 'row',
        padding: 5,
        backgroundColor: '#F6F6F6',
    },
    text: {
        flex: 1,
    },
    boldText: {
        fontWeight: 'bold'
    }
}