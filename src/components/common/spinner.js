import React from 'react'
import {ActivityIndicator,View,StyleSheet} from 'react-native'


const Spinner = () => {
    return (
        <View style={styles.Spinner}>
            <ActivityIndicator/>
        </View>
    )
}

const styles = StyleSheet.create({
    Spinner:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})

export {Spinner};