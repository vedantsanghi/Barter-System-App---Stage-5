import React, { Component } from "react";
import { Text } from "react-native";
import { View } from "react-native";
import MyHeader from "./AppHeader";

export default class SettingClass extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <MyHeader title="Settings" navigation={this.props.navigation} />
      </View>
    );
  }
}
