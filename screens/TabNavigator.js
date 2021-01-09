t Iimport React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { createBottomTabNavigator } from "react-navigation-tabs";
import BookDonateScreen from "./BookDonateScreen";
import BookRequestScreen from "./BookRequestScreen";

export const TabNavigator = createBottomTabNavigator({
  Home: {
    screen: BookDonateScreen,
    navigationOptions: {
      tabBarIcon: (
        <Image
          source={require("../assets/Home.gif")}
          style={{ width: 20, height: 20 }}
        />
      ),
      tabBarLabel: "Home"
    },
  },
  Exchange: {
    screen: BookRequestScreen,
    navigationOptions: {
      tabBarIcon: (
        <Image
          source={require("../assets/exchange.gif")}
          style={{ width: 20, height: 20 }}
        />
      ),
      tabBarLabel: "Request Item"
    },
  },
});
