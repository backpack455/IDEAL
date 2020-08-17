import React, { useState, useEffect } from 'react';
import {View, Text, StyleSheet, Platform, Alert, ActivityIndicator, StatusBar, Dimensions} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import {WebView} from 'react-native-webview'
import * as firebase from 'firebase'
import Firebasekeys from './../config'
import 'firebase/firestore';



const coursescatalog = 'https://classpert.com'
const screenWidth = Dimensions.get('window').width
let pendingrequests = 0
const acceptedrequests = 0
const currentUser = "Om"
let totalrequests = 0
const themecolor = '#fff'
const tabcolor = '#ff1616'
let currentUserpoints = '0';
let firebaseConfig = Firebasekeys


if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
firebase.auth().onAuthStateChanged(user => {

    const db = firebase.firestore().collection('users')
    if(user){
        firebase.firestore()
        .collection('users')
        // Filter results
        .where('uid', '==', `${user.uid}`)
        .get()
        .then(querySnapshot => {
            console.log('User exists: ', querySnapshot.size);
            if(querySnapshot.empty){

            db.add({
                uid: user.uid,
                email: user.email,
                points: 0,
                name: user.displayName,
                // requestedComplaints: 0,
                // pendingComplaints: 0,
                // complaintsSubmitted: 0,
            })
            
            }
            if (querySnapshot.exists) {
              console.log('User data: ', querySnapshot.data());
            }
        }
        
        );
        firebase.firestore()
        .collection('users')
        .where('uid', '==', user.uid)
        .onSnapshot(querySnapshot => {
            const item =  querySnapshot.docs.map(doc => {
                currentUserpoints = doc.data().points
                console.log('hello', doc.data().points)  
            })
        })
        firebase.firestore()
        .collection('complaints')
        // Filter results
        .get()
        .then(querySnapshot => {
            const item =  querySnapshot.docs.map(doc => {
                if(!querySnapshot.empty)
                console.log('THis many complaints', querySnapshot.size);
                pendingrequests =  1
                totalrequests = 1
            })
        })
    }
})

export default class HomeScreen extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
            isLoaded: false,
            displayName: "",
        }
    }
    componentDidMount(){
        const {displayName} = firebase.auth().currentUser

        this.setState({displayName})
    }
    signOutUser = () => {
        firebase.auth().signOut()
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                console.log('user is still signed in!!')
            } else {
                console.log('user is logged out!!')
            }
          });
    }
    render(){
        return(
        <View style={styles.welcomer}><StatusBar barStyle="light-content"/>
            <Text style={{fontWeight: "700", fontSize: 30, paddingBottom: 10}}>Welcome {this.state.displayName}</Text>
            <View
            style={{
                borderTopWidth: 6,
                borderTopColor: `${tabcolor}`,
                borderRadius: 3,
                width: 280,
                paddingBottom: 30, 
            }}
            />
             <TouchableOpacity style={{margin: 8, borderRadius: 20, paddingVertical: 20, paddingHorizontal: 24, width: (screenWidth-64/2), backgroundColor: `${tabcolor}`}} onPress={() => 
            this.props.navigation.navigate('Prizes')}>
                <Text style={{color: `${themecolor}`}}>Redeem Your Points:</Text>
                <Text></Text>
                <View style={{flexDirection: 'row'}}>
                    {/* <Ionicons name="ios-people" size={30} color="#fff" style={{paddingRight: 5}}/> */}
                    <Text></Text>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{fontSize: 24, color: `${themecolor}`}}>Balance: </Text>
                        <Text style={{fontSize: 24, color: `${themecolor}`, fontWeight: "600"}}>{currentUserpoints}</Text>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={{margin: 8, borderRadius: 20, paddingVertical: 20, paddingHorizontal: 24, width: (screenWidth-64/2), backgroundColor: `${tabcolor}`}} onPress={() => 
            this.props.navigation.navigate('Submitted Complaints')} >
                <Text style={{color: `${themecolor}`}}>View Your Requested Complaints:</Text>
                <Text></Text>
                <View style={{flexDirection: 'row'}}>
                    {/* <Ionicons name="ios-people" size={30} color="#fff" style={{paddingRight: 5}}/> */}
                    <Text></Text>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{fontSize: 24, color: `${themecolor}`}}>Pending: </Text>
                        <Text style={{fontSize: 24, color: `${themecolor}`, fontWeight: "600"}}>{pendingrequests}</Text>
                        <Text>  </Text>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={{margin: 8, borderRadius: 20, paddingVertical: 20, paddingHorizontal: 24, width: (screenWidth-64/2), backgroundColor: `${tabcolor}`}} onPress={() => 
            this.props.navigation.navigate('Complaint Form')} >
                <Text style={{color: `${themecolor}`}}>Submit a Complaint:</Text>
                <Text></Text>
                <View style={{flexDirection: 'row'}}>
                    {/* <Ionicons name="ios-people" size={30} color="#fff" style={{paddingRight: 5}}/> */}
                    <Text></Text>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{fontSize: 24, color: `${themecolor}`}}>Complaints Submitted: </Text>
                        <Text style={{fontSize: 24, color: `${themecolor}`, fontWeight: "600"}}>{totalrequests}</Text>
                        
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={{margin: 8, borderRadius: 20, paddingVertical: 20, paddingHorizontal: 24, width: (screenWidth-64/2), backgroundColor: `${tabcolor}`}} onPress={() => 
            this.props.navigation.navigate('Resources')} >
                <Text style={{color: `${themecolor}`}}>Access Resources to Learn More:</Text>
                <Text></Text>
                <View style={{flexDirection: 'row'}}>
                    {/* <Ionicons name="ios-people" size={30} color="#fff" style={{paddingRight: 5}}/> */}
                    <Text></Text>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{fontSize: 24, color: `${themecolor}`}}>Resources Read: </Text>
                        <Text style={{fontSize: 24, color: `${themecolor}`, fontWeight: "600"}}>0</Text>
                        
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.signOutUser}>
                <Text>
                    Sign Out
                </Text>
            </TouchableOpacity>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    welcomer: {
        flex: 1,
        paddingTop: 20,
        alignItems: 'center',
        backgroundColor: '#fff',
    }
})