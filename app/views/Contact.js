import React from 'react';
import {View, Alert, TouchableHighlight,
    Text,
    StyleSheet, TextInput} from 'react-native';
import Header from "../container/Header";

export default class Contact extends React.Component{
    static navigationOptions = {
        header: null,

    }

    constructor(props) {
        super(props);
        this.state={
            msg: 'Enter Message',
            name: 'Enter Name',
            email: 'Enter your Email Address'
        }
    }

    clearField= ()=> this.setState({name:'', email: '', msg: ''});

    sendMessage= ()=>{
        if(!this.state.name === 'Enter Message' && this.state.email && this.state.msg) {
            Alert.alert(this.state.name, this.state.msg);
            this.props.navigation.goBack();
        } else {
            Alert.alert("error");
        }

    }

    render() {
        return(
            <View style={styles.container}>
                <Header message="Press to login"/>
                <Text style={styles.heading}>Contact Us</Text>

                <TextInput
                style={styles.input}
                onChangeText={(text)=>this.setState({name: text})}
                value={this.state.name}
                />

                <TextInput
                    style={styles.input}
                    onChangeText={(text)=>this.setState({msg: text})}
                    value={this.state.msg}
                    multiline={true}
                    numberOfLines={4}
                />

                <TextInput
                    style={styles.input}
                    onChangeText={(text)=>this.setState({email: text})}
                    value={this.state.email}
                />

                <TouchableHighlight onPress={this.sendMessage}  underlayColor='#31e981'>
                    <Text style={styles.textButton}>Send Message</Text>
                </TouchableHighlight>

                <TouchableHighlight onPress={this.clearField}  underlayColor='#31e981'>
                    <Text style={styles.textButton}>Reset Form</Text>
                </TouchableHighlight>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
    flex:1,
        alignItems: 'center',
        paddingBottom: '45%',

    },
    heading: {
        fontSize: 16,
        flex: 1
    },
    input:{
        flex:1,
        width: '80%',
        padding: 10

    },
    multiInput:{
        flex:2,
        width: '90%',
        paddingTop: 20,

    },
    textButton: {
        marginTop: 15,
        fontSize: 16
    }
});
