import React from 'react';
import {View, Alert, TouchableHighlight, Text, StyleSheet} from 'react-native';

export default class Menu extends React.Component{


    constructor(props) {
        super(props);

    }

    onPress = ()=> {
    Alert.alert("You tapped the button!");

    }

    render() {
        return(
            <View style={styles.container}>
                <View style={styles.buttonRow}>
                    <TouchableHighlight style={styles.buttonStyle} onPress={this.onPress}>
                        <Text style={styles.buttonText}>LESSON</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.buttonStyle} onPress={this.onPress}>
                        <Text style={styles.buttonText}>REGISTER</Text>
                    </TouchableHighlight>
                </View>
                <View style={styles.buttonRow}>
                    <TouchableHighlight style={styles.buttonStyle} onPress={this.onPress}>
                        <Text style={styles.buttonText}>BLOG</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.buttonStyle} onPress={()=>this.props.navigate('ContactRT')}>
                        <Text style={styles.buttonText}>CONTACT</Text>
                    </TouchableHighlight>
                </View>
                <View style={styles.buttonRow}>
                    <TouchableHighlight style={styles.buttonStyle} onPress={this.onPress}>
                        <Text style={styles.buttonText}>QUIZ</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.buttonStyle} onPress={this.onPress}>
                        <Text style={styles.buttonText}>ABOUT</Text>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 6,
        backgroundColor: '#35605a'
    },
    buttonRow: {
        flex:2,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#ffffff',
        borderBottomWidth: 1

    },
    buttonStyle: {
        backgroundColor: '#35605a',
        width:'50%',
        height: '50%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: '#fff',
        fontSize: 18
    }
})
