import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LogoutAction from '../../Actions/LogoutAction';

class LogOutBtn extends Component {
    render() {
        return (
            <View>
                {this.props.data.loading ?
                    <ActivityIndicator /> :
                    <Button
                        backgroundColor='#517fa4'
                        title='LOGOUT'
                        onPress={() => this.props.doLogout(this.props.navigator)}
                    />
                }
            </View>
        )
    }
}

//map state cua he thong thanh props cua component
function mapStateToProps(state) {
    //map state LogoutReducer thanh props
    return {
        data: state.LogoutReducer
    };
}

//map function doLogin tu LoginAction (da import o tren) thanh 1 props
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ doLogout: LogoutAction.doLogout }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LogOutBtn);