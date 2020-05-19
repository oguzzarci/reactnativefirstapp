import React, { Component } from 'react'
import { Text, View,StyleSheet } from 'react-native'
import {Input,MyButton} from './common';


import firebase from 'firebase';

export default class loginForm extends Component {
    
    state = {
        email:'oooo@oooo.com',
        password:'',
        error:'',
        loading:false
    }

    onButtonClicked (){
        
        const {email,password} = this.state;
        this.setState({
            error:'',
            loading:true
        })

        firebase.auth().signInWithEmailAndPassword(email,password)
        .then(this.onLoginSuccess.bind(this))
        .catch(()=>{    
            firebase.auth().createUserWithEmailAndPassword(email,password)
            .then(this.onLoginSuccess.bind(this))
            .catch(this.onLoginFailed.bind(this))
        });

    }

    onLoginSuccess(){
        this.setState({
            email:'',
            password:'',
            error:'',
            loading:false
        })
    }

    onLoginFailed(){
        this.setState({
            error:'Authentication Failed',
            loading:false
        })
    }

    render() {

        const {error,loading} = this.state;

        const errorMessage = error ? (<Text style={styles.errorStyle}>{error}</Text>):null;
        //const loginButton = loading ? (<Spinner/>): (<Button onPress={this.onButtonClicked.bind(this)} title='Login'/>);


        return (
            <View style={{padding:40}}>
                <View>
                    <Input text='Email' textPlaceholder='Enter Email' value={this.state.email} onChangeText={(text)=>{
                        this.setState({
                            email:text
                        })
                    }}/>
                </View>

                <View>
                <Input text='Password' textPlaceholder='Enter Password' secureTextEntry value={this.state.password} onChangeText={(text)=>{
                        this.setState({
                            password:text
                        })
                    }}/>
                </View>

                {errorMessage}
                    <MyButton spinner={loading} title='Login' onPress={this.onButtonClicked.bind(this)} color='#E87B79'/>
                {/* <View style={styles.buttonWrapper}>
                    {loginButton}
                </View> */}
            </View>
        )
    }
}


const styles = StyleSheet.create({
    buttonWrapper:{
        marginTop:20,
        backgroundColor:'red',
        justifyContent:'center'
    },
    errorStyle:{
        fontSize:20,
        color:'red',
        paddingTop:5,
        alignSelf:'center'
    }
})