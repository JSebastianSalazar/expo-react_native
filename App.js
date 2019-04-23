import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from "./app/views/Home";
import {StackNavigator} from 'react-navigation';
import Contact from "./app/views/Contact";
export default class App extends React.Component {
  render() {
    return (
        <MyRoutes/>
    );
  }
}

const MyRoutes = StackNavigator({
  HomeRT: {
    screen: Home
  },
  ContactRT: {
    screen: Contact
  }
}, {initialRouteName: 'HomeRT'});
