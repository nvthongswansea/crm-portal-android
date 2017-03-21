import React, { Component } from 'react';
import { StyleSheet, View, Image, Dimensions, Text, ListView, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import ContactList from '../../Containers/ContactListView/';
//import SearchBar from 'react-native-material-design-searchbar';
import { SideMenu, Button, SearchBar, Icon } from 'react-native-elements';
import LogOutBtn from '../../Containers/Buttons/logout_btn'

const iconSAF = require("../../asset/pictures/logo.png");
const { width, height } = Dimensions.get("window");

export default class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			keyword: '',
			menuOpen: false
		}
		this.onKeywordChange = this.onKeywordChange.bind(this);
		this.toggleMenu = this.toggleMenu.bind(this);
		this.onMenuChange = this.onMenuChange.bind(this);
	}
	onKeywordChange(text) {
		this.setState({
			keyword: text
		})
	}
	toggleMenu() {
		this.setState({
			menuOpen: !this.state.menuOpen
		})
	}
	onMenuChange(e) {
		if (e != this.state.menuOpen)
			this.setState({
				menuOpen: !this.state.menuOpen
			});
	}
	render() {
		const MenuComp = (
			<View style={{ flex: 1, backgroundColor: '#ededed', paddingTop: 60 }}>
				<LogOutBtn navigator={this.props.navigator}/>
			</View>
		)
		return (
			<View style={styles.container}>
				<SideMenu
					isOpen={this.state.menuOpen}
					menu={MenuComp}
					disableGestures={true}
					onChange={(e)=>{this.onMenuChange}}
				>
					{/*{<SearchBar
						onSearchChange={(searchText) => this.onKeywordChange(searchText)}
						height={40}
						placeholder={'Tìm kiếm...'}
						autoCorrect={false}
						padding={5}
						returnKeyType={'search'}
					/>}*/}
					<View style={{ width, height, backgroundColor: '#F6F6F6' }}>
						<View style={styles.header}>
							<TouchableOpacity style={styles.btnSideMenu} onPress={this.toggleMenu}>
								<Icon
									name='menu' />
							</TouchableOpacity>
							<View style={{ width: "90%", justifyContent: 'center', }}>
								<SearchBar
									containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0, backgroundColor: '#F6F6F6' }}
									round
									lightTheme
									clearIcon
									textInputRef={this.state.keyword}
									onChangeText={(searchText) => this.onKeywordChange(searchText)}
									placeholder='Tìm kiếm...' />
							</View>
						</View>
						<View style={{ height: "85%", backgroundColor: '#F6F6F6' }}>
							<ContactList keyword={this.state.keyword} />
						</View>
					</View>
				</SideMenu>
			</View>
		);
	}
}

const styles = {
	container: {
		flex: 1
	},
	header: {
		height: "10%",
		flexDirection: 'row',
		justifyContent: 'center',
		backgroundColor: '#F6F6F6'
	},
	btnSideMenu: {
		width: "10%",
		justifyContent: 'center',
	}
}