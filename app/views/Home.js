import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Header from "../container/Header";
import Hero from "../container/Hero";
import Menu from '../container/Menu';
import {StackNavigator} from 'react-navigation';

export  default  class Home extends React.Component {

    static navigationOptions = {
        header: null,

    }

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={style.contaier}>
                <Header message="Press to login" />
                <Hero/>
                <Menu navigate={navigate}/>
            </View>

        );
    }

}


const style = StyleSheet.create({
    contaier: {
        flex: 1,
        alignItems: 'center'
    }
});
