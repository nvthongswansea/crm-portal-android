import React, {Component} from 'react';
import {StyleSheet, View, Image, Dimensions, Text} from 'react-native';

const iconSAF = require("../../asset/pictures/logo.png");
const { width, height } = Dimensions.get("window");

export default class Home extends Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
		<View style={styles.container}> 
			<View style={styles.logoContainer}> 
				<Image style={styles.iconSAF} source={iconSAF} resizeMode="contain"/>
                <Text style={styles.welcome}>Xin chào!</Text>
			</View>
		</View>
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
		width: "70%",
		height: "70%"
	},
	welcome: {
		color: '#FFF',
		width: 160,
		textAlign: 'center',
		opacity: 0.9
	}
}