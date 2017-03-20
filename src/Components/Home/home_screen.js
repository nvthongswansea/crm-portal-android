import React, {Component} from 'react';
import {StyleSheet, View, Image, Dimensions, Text, ListView} from 'react-native';
import ContactList from '../../Containers/ContactListView/';
import SearchBar from 'react-native-material-design-searchbar';

const iconSAF = require("../../asset/pictures/logo.png");
const { width, height } = Dimensions.get("window");

export default class Home extends Component {
	constructor(props) {
		super(props);
		this.state={
			keyword: ''
		}
		this.onKeywordChange=this.onKeywordChange.bind(this);
	}
	onKeywordChange(text) {
		this.setState({
			keyword: text
		})
	}
	render() {
		return (
		<View style={styles.container}>
			<SearchBar
                onSearchChange={(searchText) => this.onKeywordChange(searchText)}
                height={40}
                onFocus={() => console.log('On Focus')}
                onBlur={() => console.log('On Blur')}
                placeholder={'Tìm kiếm...'}
                autoCorrect={false}
                padding={5}
                returnKeyType={'search'}
            /> 
			<ContactList keyword={this.state.keyword}/>
		</View>
		);
	}
} 

const styles ={
	container: {
		flex: 1,
		backgroundColor: '#E0E0E0'
	}
}