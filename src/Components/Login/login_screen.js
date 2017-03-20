import React, {Component} from 'react';
import {StyleSheet, KeyboardAvoidingView, View, Image, Dimensions, Text} from 'react-native';
import LoginForm from '../../Containers/LoginForm/'; 

const iconSAF = require("../../asset/pictures/logo.png");
const { width, height } = Dimensions.get("window");

export default class Login extends Component {
	render() {
		return (
		<KeyboardAvoidingView style={styles.container}> 
			<View style={styles.logoContainer}> 
				<Image style={styles.iconSAF} source={iconSAF} resizeMode="contain"/>
				<Text style={styles.welcome}>Chào mừng quý khách! Xin mời đăng nhập.</Text>
			</View>
			<View style={styles.formContainer}> 
				<LoginForm/>
			</View>
		</KeyboardAvoidingView>
		);
	}
} 

const styles ={
	container: {
		flex: 1,
		backgroundColor: '#e67e22'
	},
	logoContainer: {
		alignItems: 'center',
	},
	iconSAF: {
		width: "50%",
		height: "50%"
	},
	welcome: {
		color: '#FFF',
		width: 160,
		textAlign: 'center',
		opacity: 0.9
	}
}