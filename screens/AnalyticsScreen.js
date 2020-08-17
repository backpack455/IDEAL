import React from 'react';
import {StyleSheet, View, Text, Dimensions, Alert, StatusBar } from 'react-native';
import {MaterialCommunityIcons, Ionicons} from '@expo/vector-icons'
import { FlatList } from 'react-native-gesture-handler';
import { Button } from 'react-native-paper';

const screenWidth = Dimensions.get('window').width

const RiskLevel = '2-3'

const EstPeople = 'Est. 3 (1-5)'

const PIHS = 0

const CasesCount = 'low'

const themecolor = '#fff'
 
const tabcolor = '#FF1616'

export default function App(props) {
    return (
        <View style={styles.container}>
            <StatusBar/>
            <Text style={{fontSize: 16, paddingLeft: 10, marginBottom: 5}}>Showing Results:   </Text>
            <View
            style={{
                borderTopWidth: 6,
                borderTopColor: `${tabcolor}`,
                borderRadius: 3,
                width: 140,
            }}
            />
            <View style={{margin: 8, borderRadius: 20, paddingVertical: 20, paddingHorizontal: 24, width: (screenWidth-64/2), backgroundColor: `${tabcolor}`}}>
                <Text style={{color: `${themecolor}`}}>Estimated Cars at this Time (1 Mile):</Text>
                <Text></Text>
                <View style={{flexDirection: 'row'}}>
                    <Ionicons name="ios-people" size={30} color="#fff" style={{paddingRight: 5}}/>
                    <Text></Text>
                    <Text style={{fontSize: 24, color: `${themecolor}`}}>{EstPeople}</Text>
                </View>
            </View>
            <View style={{margin: 8, borderRadius: 20, paddingVertical: 20, paddingHorizontal: 24, width: (screenWidth-64/2), backgroundColor: `${tabcolor}`}}>
                <Text style={{color: `${themecolor}`}}>Risk Level at this Location: </Text>
                <Text></Text>
                <View style={{flexDirection: 'row'}}>
                    <MaterialCommunityIcons name="hospital-box" size={24} color={themecolor} style={{paddingRight: 5}} />
                    <Text></Text>
                    <Text style={{fontSize: 24, color: `${themecolor}`}}>{RiskLevel}</Text>
                </View>
            </View>
            <View style={{margin: 8, borderRadius: 20, paddingVertical: 20, paddingHorizontal: 24, width: (screenWidth-64/2), backgroundColor: `${tabcolor}`}}>
                <Text style={{color: `${themecolor}`}}>Busy Level:</Text>
                <Text></Text>
                <View style={{flexDirection: 'row'}}>
                    <MaterialCommunityIcons name="chart-areaspline" size={24} color="#fff" style={{paddingRight: 5}}/>
                    <Text></Text>
                    <Text style={{fontSize: 24, color: '#fff'}}>{CasesCount}</Text>
                </View>
            </View>
            <View style={{margin: 8, borderRadius: 20, paddingVertical: 20, paddingHorizontal: 24, width: (screenWidth-64/2), backgroundColor: `${tabcolor}`}}>
                <Text style={{color: `${themecolor}`}}>Other IDEAL Drivers on the Road:</Text>
                <Text></Text>
                <View style={{flexDirection: 'row'}}>
                    <Ionicons name="ios-people" size={30} color="#fff" style={{paddingRight: 5}}/>
                    <Text></Text>
                    <Text style={{fontSize: 24, color: `${themecolor}`}}>0</Text>
                </View>
            </View>
            
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingHorizontal: 10,
      padding: 15,
    },
});