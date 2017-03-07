import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View,
  Dimensions,
  TextInput,
  Button,
  TouchableOpacity
} from 'react-native';
import React, { Component } from 'react';

const iconSAF = require("../asset/pictures/logo.png");
const lockIcon = require("../asset/pictures/login_lock.png");
const personIcon = require("../asset/pictures/login_person.png");
const { width, height } = Dimensions.get("window");

export default class main extends Component {
  render() {
    console.log(width)
    return (
      <View style={styles.container}>
        <View style={styles.iconSAFWrap}>
          <Image source={iconSAF} style={styles.iconSAF} resizeMode="contain" />
        </View>
        <View style={styles.wrapper}>
          <View style={styles.inputWrap}>
            <View style={styles.iconWrap}>
              <Image source={personIcon} style={styles.icon} resizeMode="contain" />
            </View>
            <TextInput 
              placeholder="Username" 
              placeholderTextColor="#FFF"
              style={styles.input} 
            />
          </View>
          <View style={styles.inputWrap}>
            <View style={styles.iconWrap}>
              <Image source={lockIcon} style={styles.icon} resizeMode="contain" />
            </View>
            <TextInput 
              placeholder="Password" 
              placeholderTextColor="#FFF"
              style={styles.input}
              secureTextEntry  
            />
          </View>
          <TouchableOpacity activeOpacity={.5}>
            <View>
              <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={.5}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Sign In</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "burlywood",
    flex: 1,
    width,
    height,
  },
  iconSAF: {
    width: "70%",
    height: "70%",
    flex: 1,
  },
  iconSAFWrap: {
    flex: 1,
    paddingTop: 70,
    alignItems: 'center',
  },
  wrapper: {
    paddingBottom: 200,
  },
  inputWrap: {
    flexDirection: "row",
    marginVertical: 10,
    height: 40,
  },
  iconWrap: {
    paddingHorizontal: 7,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    height: 20,
    width: 20,
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
  },
  forgotPasswordText: {
    color: "#D8D8D8",
    backgroundColor: "transparent",
    textAlign: "right",
    paddingRight: 15,
  },
  button: {
    backgroundColor: "#FF3366",
    paddingVertical: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
  },
});
