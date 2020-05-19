import React from 'react'
import {View,StyleSheet,Button} from 'react-native'
import {Spinner} from './spinner'

const MyButton = ({spinner,title,onPress,color}) => {

    const content = spinner ? (<Spinner/>) : (<Button onPress={onPress} title={title} color={color}/>)

    return (
        <View style={style.buttonWrapper}>
            {content}
        </View>
    )
}

const style = StyleSheet.create({
    buttonWrapper:{
        marginTop:20,
        backgroundColor:'red',
        justifyContent:'center'
    }
})

export {MyButton}