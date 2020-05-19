import React, { Component } from 'react'
import { View,StyleSheet,Button } from 'react-native'
import Banner from "./components/banner"
import LoginForm from "./components/loginForm"
import firebase from 'firebase'
import {Spinner} from './components/common'
import firebaseConf from './firebase'

 class App extends Component {

    state = {
        loggedIn:null
    }

    componentDidMount(){
        // firebase.initializeApp({
        //     apiKey: 'AIzaSyDrF8md3aK_FzUZHYwjXbW0f6jD8cHILdE',
        //     authDomain: 'reactnative-52cda.firebaseapp.com',
        //     databaseURL: 'https://reactnative-52cda.firebaseio.com',
        //     projectId: 'reactnative-52cda',
        //     storageBucket: 'reactnative-52cda.appspot.com',
        //     messagingSenderId: '892209777007',
        //     appId: '1:892209777007:web:6beb5749c069da724c009a'
        //   });

        if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConf);}

          firebase.auth().onAuthStateChanged((user)=>{
              const loggedIn = user ? true : false;
              this.setState({
                  loggedIn
              })
          })
    }


    renderContent(){
        const {loggedIn} = this.state;
        

        switch (loggedIn) {
            case true:
                return(
                    <Button onPress={()=> firebase.auth().signOut()} title='Logout' color='red'/>
                )
            case false:
                return(
                    <LoginForm/>
                )
            default:
                return(
                    <Spinner/>
                )
        }
    }


    render() {

        return (
            <View>
                <Banner text='Authentication'/>
                {this.renderContent()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    appContainer:{
        backgroundColor:'#F3F3F3',
        flex:1
    }
})

export default App;