import React, {Component} from 'react';
import {View, StyleSheet, TextInput, Image, Text, TouchableOpacity, ActivityIndicator, BackAndroid } from 'react-native';
import { connect } from 'react-redux';
import dismissKeyboard from 'react-native-dismiss-keyboard';
import {bindActionCreators} from 'redux';
import LoginAction from '../../Actions/LoginAction';

const lockIcon = require("../../asset/pictures/login_lock.png");
const personIcon = require("../../asset/pictures/login_person.png");

class LoginForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: ''
		};
		this.onUsernameChange=this.onUsernameChange.bind(this);
		this.onPasswordChange=this.onPasswordChange.bind(this);
		this.onLogin=this.onLogin.bind(this);
	}

	componentWillMount(){
		BackAndroid.addEventListener('hardwareBackPress', () => {
			console.log('cc ay')
			return false;
		});
	}

	onUsernameChange(e) {
		this.setState({
			username: e.nativeEvent.text
		})
	}

	onPasswordChange(e) {
		this.setState({
			password: e.nativeEvent.text
		})
	}


	onLogin() {
		dismissKeyboard();
		this.props.doLogin(this.state.username, this.state.password);
	}

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.inputWrap}>
					<View style={styles.iconWrap}>
						<Image source={personIcon} style={styles.icon}/>
					</View>
					<TextInput
						placeholder="Username"
						style={styles.input}
						onChange={(e) => {this.onUsernameChange(e)}}
					/>
				</View>
				<View style={styles.inputWrap}>
					<View style={styles.iconWrap}>
						<Image source={lockIcon} style={styles.icon}/>
					</View>
					<TextInput
						placeholder="Mật khẩu"
						style={styles.input}
						secureTextEntry={true}
						onChange={(e) => {this.onPasswordChange(e)}}
					/>
				</View>
				{this.props.data.loading? <View style={styles.loadingIndicator}><ActivityIndicator color="#0000ff"/></View>:
				<TouchableOpacity style={styles.button} onPress={this.onLogin}>
					<Text style={styles.text}>Đăng nhập</Text>
				</TouchableOpacity>
				}
				<TouchableOpacity activeOpacity={.5}>
	                <Text style={styles.forgotPasswordText}>Quên mật khẩu?</Text>
	            </TouchableOpacity>
			</View>
		);
	}
}

//map state cua he thong thanh props cua component
function mapStateToProps(state) {
	//map state LoginReducer thanh props
	return {
		data: state.LoginReducer
	};
}

//map function doLogin tu LoginAction (da import o tren) thanh 1 props
function mapDispatchToProps(dispatch) {
   return bindActionCreators({doLogin: LoginAction.doLogin}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);

const styles= {
	container: {
		padding: 10,
		paddingBottom: 20
	},
	inputWrap: {
		flexDirection: "row",
	    marginVertical: 10,
	    height: 40,
	},
	iconWrap: {
		paddingHorizontal: 7,
	    alignItems: "center",
	    justifyContent: "center"
	},
	icon: {
		width: 20,
		height: 21
	},
	input: {
		backgroundColor: 'rgba(255,255,255,0.3)',
		flex: 1,
    	paddingHorizontal: 10
	},
	button: {
		backgroundColor: '#8e44ad',
		paddingVertical: 15
	},
	text: {
		textAlign: 'center'
	},
	forgotPasswordText: {
		color: "#D8D8D8",
	    backgroundColor: "transparent",
	    textAlign: "center",
	},
	loadingIndicator: {
		paddingVertical: 15
	},
}