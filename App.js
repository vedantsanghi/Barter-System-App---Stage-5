import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import WelcomeScreen from "./screens/WelcomeScreen";
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import { TabNavigator } from "./screens/TabNavigator";
import Drawer from "./screens/Drawer";
import { DrawerNavigation } from "./screens/AppDrawerNavigation";
export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}
const SwitchNavigator = createSwitchNavigator({
  WelcomeScreen: { screen: WelcomeScreen },
  Drawer: { screen: DrawerNavigation },
});
const AppContainer = createAppContainer(SwitchNavigator);
