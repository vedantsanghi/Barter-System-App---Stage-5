import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { ListItem } from "react-native-elements";
import firebase from "firebase";
import db from "../config";
import MyHeader from "../screens/AppHeader";

export default class BookDonateScreen extends Component {
  constructor() {
    super();
    this.state = {
      requestedBooksList: [],
    };
    this.requestRef = null;
  }

  getRequestedBooksList = () => {
    this.requestRef = db
      .collection("requested_items")
      .onSnapshot((snapshot) => {
        var requestedBooksList = snapshot.docs.map((document) =>
          document.data()
        );
        this.setState({
          requestedBooksList: requestedBooksList,
        });
      });
  };

  componentDidMount() {
    this.getRequestedBooksList();
  }

  componentWillUnmount() {
    this.requestRef();
  }

  keyExtractor = (item, index) => index.toString();

  renderItem = ({ item, i }) => {
    return (
      <ListItem
        key={i}
        title={item.item_name}
        subtitle={item.description}
        titleStyle={{ color: "black", fontWeight: "bold" }}
        rightElement={
          <TouchableOpacity style={styles.button}>
            <Text style={{ color: "#ffff" }}>View</Text>
          </TouchableOpacity>
        }
        bottomDivider
      />
    );
  };

  render() {
    console.log(this.state.requestedBooksList);
    return (
      <View style={{ flex: 1 }}>
        <MyHeader title="Home" navigation={this.props.navigation} />
        <View style={{ flex: 1 }}>
          {this.state.requestedBooksList.length === 0 ? (
            <View style={styles.subContainer}>
              <Text style={{ fontSize: 20 }}>List Of All Requested Items</Text>
            </View>
          ) : (
            <FlatList
              keyExtractor={this.keyExtractor}
              data={this.state.requestedBooksList}
              renderItem={this.renderItem}
            />
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  subContainer: {
    flex: 1,
    fontSize: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: 100,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ff5722",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    alignSelf: "flex-end",
  },
});
