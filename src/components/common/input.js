import React, { Component } from 'react'
import { Text, View,StyleSheet,TextInput } from 'react-native'


const Input = ({text,textPlaceholder,onChangeText,value,secureTextEntry}) => {


    const {inputWrapper,textStyle,inputStyle} = styles;


    return(

        <View style={inputWrapper}>

    <Text style={textStyle}>{text}</Text>
    <TextInput style={inputStyle} secureTextEntry={secureTextEntry} placeholder={textPlaceholder} onChangeText={onChangeText} value={value}/>

        </View>

    )

}

const styles = StyleSheet.create({

    inputWrapper:{
        flexDirection:'row',
        height:50,
        width:'auto',
        borderColor:'black',
        borderBottomWidth:1,
        alignItems:'center'
    },
    textStyle:{
        paddingLeft:20,
        flexGrow:1,
        fontSize:17
    },
    inputStyle:{
        flexGrow:2,
        fontSize:17
    }


})

export { Input};