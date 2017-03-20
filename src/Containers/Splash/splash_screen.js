import React, { Component } from 'react';
import { StyleSheet, View, Image, Dimensions, Text, ActivityIndicator } from 'react-native';
import StartAction from '../../Actions/StartAction';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const iconSAF = require("../../asset/pictures/logo.png");
const loading = require("../../asset/pictures/loading.gif");

const { width, height } = Dimensions.get("window");

class Splash extends Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		console.log('mounted')
		setTimeout(() => {
			this.props.doStart(this.props.navigator);
		}, 1200);

	}
	componentWillUnmount() {
		console.log('unmounting..')
	}
	render() {
		console.log(this.props.data.loading)
		return (
			<View style={styles.container}>
				<View style={styles.logoContainer}>
					<Image style={styles.iconSAF} source={iconSAF} resizeMode="contain" />
					<Text style={styles.loading}>Một sản phẩm của SAF.</Text>
				</View>
			</View>
		);
	}
}
function mapStateToProps(state) {
	return {
		data: state.StartReducer
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ doStart: StartAction.doStart }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Splash);

const styles = {
	container: {
		flex: 1,
		backgroundColor: '#E0E0E0'
	},
	logoContainer: {
		alignItems: 'center',
	},
	iconSAF: {
		width: "70%",
		height: "70%"
	},
	loading: {
		color: '#0088cc',
		width: 160,
		textAlign: 'center',
		opacity: 0.9,
		fontSize: 16,
		fontWeight: 'bold'
	}
}