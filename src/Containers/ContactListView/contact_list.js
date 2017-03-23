import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, RefreshControl, TouchableHighlight, TextInput, Image, Text, TouchableOpacity, ListView, ActivityIndicator, BackAndroid } from 'react-native';
import { connect } from 'react-redux';
import dismissKeyboard from 'react-native-dismiss-keyboard';
import { bindActionCreators } from 'redux';
import FetchContact from '../../Actions/FetchContactsActions';
import { Icon } from 'react-native-elements';

const { width, height } = Dimensions.get("window");

class ContactList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1
        }
        this.renderContacts = this.renderContacts.bind(this);
        this._onRefresh = this._onRefresh.bind(this);
        this.renderFooter = this.renderFooter.bind(this);
        this.fetchMoreContacts = this.fetchMoreContacts.bind(this);
        this.openDetail=this.openDetail.bind(this);
        this.renderRow=this.renderRow.bind(this);
    }
    componentWillReceiveProps(nextProps) {
        if (this.props.keyword != nextProps.keyword) {
            if (typeof nextProps.keyword === 'string') {
                this.setState({
                    currentPage: 1
                }, () => {
                    this.props.doFetch(nextProps.keyword);
                })
            } else {
                this.props.doFetch('');
            }
        }
    }
    _onRefresh() {
        this.setState({
            currentPage: 1
        }, () => {
            this.props.doFetch(this.props.keyword);
        })
    }
    openDetail(contactId) {
        console.log('press '+contactId)
        this.props.navigator.push({
            name: "ContactDetail",
            contactId
        })
    }
    componentDidMount() {
        this.setState({
            currentPage: 1
        }, () => {
            this.props.doFetch(this.props.keyword);
        })
    }
    fetchMoreContacts() {
        this.setState({
            currentPage: this.state.currentPage + 1
        }, () => {
            this.props.doFetchMore(this.props.keyword, this.state.currentPage)
        })
    }
    renderFooter() {
        return (
            <View>
                {this.props.data.loadingMore ? <ActivityIndicator style={{height: 40}}/> :
                    <TouchableOpacity style={{height: 40, justifyContent: 'center'}} onPress={this.fetchMoreContacts}>
                        <Icon name='cached'/>
                    </TouchableOpacity>
                }
            </View>
        );
    }
    renderRow(data) {
        return (
            <View>
                <TouchableHighlight underlayColor={'dodgerblue'} onPress={() => {this.openDetail(data.id)}}>
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
            return (<View style={styles.loadingIndicator}><Text>Không có dữ liệu</Text></View>);
        var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        return (
            <View style={styles.list}>

                <ListView
                    dataSource={ds.cloneWithRows(this.props.data.payload.records)}
                    renderRow={this.renderRow}
                    renderSeparator={this.renderSeparator}
                    renderFooter={this.renderFooter}
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
    return bindActionCreators({ doFetch: FetchContact.fetchContacts, doFetchMore: FetchContact.fetchMoreContacts }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

const styles = {
    loadingIndicator: {
        width,
        height,
        paddingVertical: 15,
        backgroundColor: '#F6F6F6'
    },
    name: {
        fontWeight: 'bold'
    },
    list: {
        backgroundColor: '#F6F6F6'
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