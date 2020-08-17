import React from 'react'
import {View, Text, StyleSheet, Platform, Alert, ActivityIndicator, Dimensions, Image,} from 'react-native'
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler'
import {WebView} from 'react-native-webview'
import * as firebase from 'firebase'
import Firebasekeys from './../config'
import 'firebase/firestore';

let currentUserpoints = '1,000';
let firebaseConfig = Firebasekeys


if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
firebase.auth().onAuthStateChanged(user => {

    const db = firebase.firestore().collection('users')
    if(user){
        firebase.firestore()
        .collection('users')
        .where('uid', '==', user.uid)
        .onSnapshot(querySnapshot => {
            const item =  querySnapshot.docs.map(doc => {
                currentUserpoints = doc.data().points
                console.log('hello', doc.data().points)  
            })
        })
    }
})
const employmentprojections = 'https://www.bls.gov/emp/'

const themecolor = '#fff'
const tabcolor = '#ff1616'
const screenWidth = Dimensions.get('window').width

export default class PrizeScreen extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
            isLoaded: false,
        }
    }
    render(){
        return(
            <ScrollView style={styles.container}>
                <View style={{padding: 30, alignItems: "center"}}>
                    <Text style={{fontWeight: "900", fontSize: 50 }}>{currentUserpoints}</Text>
                    <Text style={{padding: 10}}> Credits</Text>
                </View>
                <View style={{flexDirection: "row", justifyContent: "center", paddingLeft: 10, paddingRight: 10}}>
                    <TouchableOpacity style={styles.coupon} onPress={() => 
                        this.props.navigation.navigate('')} >
                            <Text>KROGER</Text>
                            <Text></Text>
                            <Image style={styles.image}source={require('../assets/kroger.png')} />
                            <View style={{flexDirection: 'row'}}>
                                {/* <Ionicons name="ios-people" size={30} color="#fff" style={{paddingRight: 5}}/> */}
                                <Text></Text>
                                <View style={{flexDirection: 'row'}}>
                                    <Text style={{fontSize: 18, fontWeight: "500"}}> $10 off</Text>
                                </View>
                            </View>

                            <Text style={{color: 'grey', paddingTop: 5, fontSize: 10}}>
                                    100 credits
                            </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.coupon} onPress={() => 
                        this.props.navigation.navigate('Complaint Form')} >
                            <Text>AMAZON</Text>
                            <Text></Text>
                            <Image style={styles.image}source={require('../assets/amazon.png')} />
                            <View style={{flexDirection: 'row'}}>
                                {/* <Ionicons name="ios-people" size={30} color="#fff" style={{paddingRight: 5}}/> */}
                                <Text></Text>
                                <View style={{flexDirection: 'row'}}>
                                    <Text style={{fontSize: 18, fontWeight: "500"}}> $10 off</Text>
                                </View>
                            </View>

                            <Text style={{color: 'grey', paddingTop: 5, fontSize: 10}}>
                                    100 credits
                            </Text>
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection: "row", justifyContent: "center", paddingLeft: 10, paddingRight: 10}}>
                    <TouchableOpacity style={styles.coupon} onPress={() => 
                        this.props.navigation.navigate('Complaint Form')} >
                            <Text>BEST BUY</Text>
                            <Text></Text>
                            <Image style={styles.image}source={require('../assets/bestbuy.jpg')} />
                            <View style={{flexDirection: 'row'}}>
                                {/* <Ionicons name="ios-people" size={30} color="#fff" style={{paddingRight: 5}}/> */}
                                <Text></Text>
                                <View style={{flexDirection: 'row'}}>
                                    <Text style={{fontSize: 18, fontWeight: "500"}}> $10 off</Text>
                                </View>
                            </View>

                            <Text style={{color: 'grey', paddingTop: 5, fontSize: 10}}>
                                    100 credits
                            </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.coupon} onPress={() => 
                        this.props.navigation.navigate('Complaint Form')} >
                            <Text>CVS</Text>
                            <Text></Text>
                            <Image style={styles.image}source={require('../assets/cvs.jpg')} />
                            <View style={{flexDirection: 'row'}}>
                                {/* <Ionicons name="ios-people" size={30} color="#fff" style={{paddingRight: 5}}/> */}
                                <Text></Text>
                                <View style={{flexDirection: 'row'}}>
                                    <Text style={{fontSize: 18, fontWeight: "500"}}> $10 off</Text>
                                </View>
                            </View>

                            <Text style={{color: 'grey', paddingTop: 5, fontSize: 10}}>
                                    100 credits
                            </Text>
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection: "row", justifyContent: "center", paddingLeft: 10, paddingRight: 10}}>
                    <TouchableOpacity style={styles.coupon} onPress={() => 
                        this.props.navigation.navigate('Complaint Form')} >
                            <Text>TACO BELL</Text>
                            <Text></Text>
                            <Image style={styles.image}source={require('../assets/tacobell.jpg')} />
                            <View style={{flexDirection: 'row'}}>
                                {/* <Ionicons name="ios-people" size={30} color="#fff" style={{paddingRight: 5}}/> */}
                                <Text></Text>
                                <View style={{flexDirection: 'row'}}>
                                    <Text style={{fontSize: 18, fontWeight: "500"}}> $10 off</Text>
                                </View>
                            </View>

                            <Text style={{color: 'grey', paddingTop: 5, fontSize: 10}}>
                                    100 credits
                            </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.coupon} onPress={() => 
                        this.props.navigation.navigate('Complaint Form')} >
                            <Text>TARGET</Text>
                            <Text></Text>
                            <Image style={styles.image}source={require('../assets/target.png')} />
                            <View style={{flexDirection: 'row'}}>
                                {/* <Ionicons name="ios-people" size={30} color="#fff" style={{paddingRight: 5}}/> */}
                                <Text></Text>
                                <View style={{flexDirection: 'row'}}>
                                    <Text style={{fontSize: 18, fontWeight: "500"}}> $10 off</Text>
                                </View>
                            </View>

                            <Text style={{color: 'grey', paddingTop: 5, fontSize: 10}}>
                                    100 credits
                            </Text>
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection: "row", justifyContent: "center", paddingLeft: 10, paddingRight: 10}}>
                    <TouchableOpacity style={styles.coupon} onPress={() => 
                        this.props.navigation.navigate('Complaint Form')} >
                            <Text>Walmart</Text>
                            <Text></Text>
                            <Image style={styles.image}source={require('../assets/walmart.jpg')} />
                            <View style={{flexDirection: 'row'}}>
                                {/* <Ionicons name="ios-people" size={30} color="#fff" style={{paddingRight: 5}}/> */}
                                <Text></Text>
                                <View style={{flexDirection: 'row'}}>
                                    <Text style={{fontSize: 18, fontWeight: "500"}}> $10 off</Text>
                                </View>
                            </View>

                            <Text style={{color: 'grey', paddingTop: 5, fontSize: 10}}>
                                    100 credits
                            </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.coupon} onPress={() => 
                        this.props.navigation.navigate('Complaint Form')} >
                            <Text>EBAY</Text>
                            <Text></Text>
                            <Image style={styles.image}source={require('../assets/ebay.jpg')} />
                            <View style={{flexDirection: 'row'}}>
                                {/* <Ionicons name="ios-people" size={30} color="#fff" style={{paddingRight: 5}}/> */}
                                <Text></Text>
                                <View style={{flexDirection: 'row'}}>
                                    <Text style={{fontSize: 18, fontWeight: "500"}}> $10 off</Text>
                                </View>
                            </View>

                            <Text style={{color: 'grey', paddingTop: 5, fontSize: 10}}>
                                    100 credits
                            </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    coupon: {
        alignItems: "center",
        width: (175),
        margin: 8,
        borderRadius: 20,
        paddingVertical: 20,
        paddingHorizontal: 24,
        shadowOffset: {height: -5, width: 10},
        shadowRadius: 10,
        shadowColor: "grey",
        backgroundColor: '#fff',
        shadowOpacity: 0.1,
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 15,
        backgroundColor: '#fff'
    }
})