import React from 'react';
import {StyleSheet, Image, View} from 'react-native';

export default class Hero extends  React.Component{

    constructor(props) {
        super(props);

    }

    render() {
        return(
                <Image style={styles.heroImage} source={require('./IMG/descarga.png')}/>
        )
    }


}
const  styles = StyleSheet.create({
    heroImage: {
        flex:8
    }
})
