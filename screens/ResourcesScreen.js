import React, {Component} from 'react';
import { ListItem, Left, Right, Thumbnail, Body, View, Text} from 'native-base';
import {Image, Button, ScrollView} from 'react-native'
import * as WebBrowser from 'expo-web-browser'

import { useNavigation } from '@react-navigation/native';

const themecolor = '#fff'
const tabcolor = '#ff1616'
export class DataItem extends Component {
    state={
      userComplaints: [],
    }
    constructor(props) {
        super(props);
        this.data = props.data;
    }
    render() {
        return(
            <ScrollView style={{backgroundColor: '#fff'}}>
                <ListItem thumbnail >
                <Left>
                <Image style={{height: 80,
                width: 80, 
                // Set border width.
                borderWidth: 1,
                
                // Set border Hex Color code here.
                borderColor: `${themecolor}`,
                
                // Set border Radius.
                borderRadius: 10}}source={require('./../assets/mv.jpg')}/>
                </Left>
                <Body>
                    <Text numberOfLines={2}>Moving Violations</Text>
                    <Text note numberOfLines={2}>A moving violation occurs whenever a vehicle in motion violates a traffic law.  

The most common moving violations include:

Driving over the posted speed limit
Running a stop sign or red light
Not stopping for a school bus or pedestrian
Making an illegal u-turn
Passing another vehicle illegally</Text>

                </Body>
                <Right>
                    {/* <Button transparent onPress={this.getUserComplaintsHandler} >
                    <Text>View</Text>
                    </Button> */}
                <Button
                    titleStyle={{
                        fontSize: 12,
                    }}
                    type="clear"
                    title='View'
                    onPress={() => WebBrowser.openBrowserAsync('https://www.lawfirms.com/resources/traffic-tickets/traffic-basics-and-statistics/guide-traffic-tickets-us.htm#moving')}
                    />
                    </Right>
                </ListItem>
                <ListItem thumbnail >
                <Left>
                <Image style={{height: 80,
                width: 80,
                // Set border width.
                borderWidth: 1,
                
                // Set border Hex Color code here.
                borderColor: `${themecolor}`,
                
                // Set border Radius.
                borderRadius: 10}}source={require('./../assets/nmv1.jpg')}/>
                </Left>
                <Body>
                    <Text numberOfLines={2}>Non-Moving Traffic Violations</Text>
                    <Text note numberOfLines={2}>A non-moving violation typically involves parking your car illegally or receiving a “fix-it” ticket to repair faulty equipment, or removing modifications to your vehicle that are illegal.   They are fined at a much lower rate than a moving violation and do not show up on your driving record.  </Text>
                </Body>
                <Right>
                    {/* <Button transparent onPress={this.getUserComplaintsHandler} >
                    <Text>View</Text>
                    </Button> */}
                <Button
                    titleStyle={{
                        fontSize: 12,
                    }}
                    type="clear"
                    title='View'
                    onPress={() => WebBrowser.openBrowserAsync('https://www.lawfirms.com/resources/traffic-tickets/traffic-basics-and-statistics/guide-traffic-tickets-us.htm#nonmoving')}
                    />
                    </Right>
                </ListItem>
                <ListItem thumbnail >
                <Left>
                <Image style={{height: 80,
                width: 80,
                // Set border width.
                borderWidth: 1,
                
                // Set border Hex Color code here.
                borderColor: `${themecolor}`,
                
                // Set border Radius.
                borderRadius: 10}}source={require('./../assets/I.jpg')}/>
                </Left>
                <Body>
                    <Text numberOfLines={2}>Traffic Infractions</Text>
                    <Text note numberOfLines={2}>Examples of common traffic infractions are speeding, failure to stop at a red light or stop sign, tailgating, illegal u-turn or unsafe lane changes.   These infractions are categorized as civil rather than criminal in nature.   They are not punishable by jail and are not subject to trial by jury. </Text>
                </Body>
                <Right>
                    {/* <Button transparent onPress={this.getUserComplaintsHandler} >
                    <Text>View</Text>
                    </Button> */}
                <Button
                    titleStyle={{
                        fontSize: 12,
                    }}
                    type="clear"
                    title='View'
                    onPress={() => WebBrowser.openBrowserAsync('https://www.lawfirms.com/resources/traffic-tickets/traffic-basics-and-statistics/guide-traffic-tickets-us.htm#infractions')}
                    />
                    </Right>
                </ListItem>
                <ListItem thumbnail >
                <Left>
                <Image style={{height: 80,
                width: 80,
                // Set border width.
                borderWidth: 1,
                
                // Set border Hex Color code here.
                borderColor: `${themecolor}`,
                
                // Set border Radius.
                borderRadius: 10}}source={require('./../assets/TM.jpg')}/>
                </Left>
                <Body>
                    <Text numberOfLines={2}>Traffic Misdemeanors</Text>
                    <Text note numberOfLines={2}>Traffic violations categorized as misdemeanors can be punishable by a fine, a jail sentence or both.   Individuals charged with such offenses should seek legal counsel from an attorney.  </Text>

                </Body>
                <Right>
                    {/* <Button transparent onPress={this.getUserComplaintsHandler} >
                    <Text>View</Text>
                    </Button> */}
                <Button
                    titleStyle={{
                        fontSize: 12,
                    }}
                    type="clear"
                    title='View'
                    onPress={() => WebBrowser.openBrowserAsync('https://www.lawfirms.com/resources/traffic-tickets/traffic-basics-and-statistics/guide-traffic-tickets-us.htm#misdemeanors')}
                    />
                    </Right>
                </ListItem>
                <ListItem thumbnail >
                <Left>
                <Image style={{height: 80,
                width: 80,
                // Set border width.
                borderWidth: 1,
                
                // Set border Hex Color code here.
                borderColor: `${themecolor}`,
                
                // Set border Radius.
                borderRadius: 10}}source={require('./../assets/V.jpg')}/>
                </Left>
                <Body>
                    <Text numberOfLines={2}>Traffic Felonies</Text>
                    <Text note numberOfLines={2}>Felonies are typically the most serious crimes in any criminal law system and felony traffic offenses are no exception.   An individual can be charged with a felony if they commit a traffic offense, which results in extensive property damage, serious injury, or the death of another person.   Repeatedly driving on a revoked license is also considered a felony traffic offense.</Text>
                </Body>
                <Right>
                    {/* <Button transparent onPress={this.getUserComplaintsHandler} >
                    <Text>View</Text>
                    </Button> */}
                <Button
                    titleStyle={{
                        fontSize: 12,
                    }}
                    type="clear"
                    title='View'
                    onPress={() => WebBrowser.openBrowserAsync('https://www.lawfirms.com/resources/traffic-tickets/traffic-basics-and-statistics/guide-traffic-tickets-us.htm#felonies')}
                    />
                    </Right>
                </ListItem>
                <ListItem thumbnail >
                <Left>
                <Image style={{height: 80,
                width: 80,
                // Set border width.
                borderWidth: 1,
                
                // Set border Hex Color code here.
                borderColor: `${themecolor}`,
                
                // Set border Radius.
                borderRadius: 10}}source={require('./../assets/K.jpg')}/>
                </Left>
                <Body>
                    <Text numberOfLines={2}>Knowing Your Traffic Ticket Charges</Text>
                    <Text note numberOfLines={2}>Before deciding whether or not to fight your ticket, it is important to understand what you’ve been charged with. You need to take the following into consideration before making a decision:</Text>
                </Body>
                <Right>
                    {/* <Button transparent onPress={this.getUserComplaintsHandler} >
                    <Text>View</Text>
                    </Button> */}
                <Button
                    titleStyle={{
                        fontSize: 12,
                    }}
                    type="clear"
                    title='View'
                    onPress={() => WebBrowser.openBrowserAsync('https://www.lawfirms.com/resources/traffic-tickets/fighting-your-ticket/knowing-your-traffic-ticket-charges.htm')}
                    />
                    </Right>
                </ListItem>
                
                <ListItem thumbnail >
                <Left>
                <Image style={{height: 80,
                width: 80,
                // Set border width.
                borderWidth: 1,
                
                // Set border Hex Color code here.
                borderColor: `${themecolor}`,
                
                // Set border Radius.
                borderRadius: 10}}source={require('./../assets/S.png')}/>
                </Left>
                <Body>
                    <Text numberOfLines={2}>Speeding Violations and State Law</Text>
                    <Text note numberOfLines={2}>In most states, a speeding violation is a criminal offense. The prosecution must prove a driver’s guilt beyond a reasonable doubt. However, in some states, the burden of proof for speeding is clear and convincing evidence. It is important that you understand the speed laws in your area and what the state must meet in order to obtain a conviction against you.</Text>
                </Body>
                <Right>
                    {/* <Button transparent onPress={this.getUserComplaintsHandler} >
                    <Text>View</Text>
                    </Button> */}
                <Button
                    titleStyle={{
                        fontSize: 12,
                    }}
                    type="clear"
                    title='View'
                    onPress={() => WebBrowser.openBrowserAsync('https://www.lawfirms.com/resources/traffic-tickets/speed-violations/speeding-violations-and-state-law.htm')}
                    />
                    </Right>
                </ListItem>
                <ListItem thumbnail >
                <Left>
                <Image style={{height: 80,
                width: 80,
                // Set border width.
                borderWidth: 1,
                
                // Set border Hex Color code here.
                borderColor: `${themecolor}`,
                
                // Set border Radius.
                borderRadius: 10}}source={require('./../assets/other.png')}/>
                </Left>
                <Body>
                    <Text numberOfLines={2}>Other Common Moving Violations</Text>
                    <Text note numberOfLines={2}>A moving violation is a violation of the law that occurs in any moving vehicle. The most common violation is speeding. However, others topping the list include:

Careless driving
Reckless driving</Text>
                </Body>
                <Right>
                    {/* <Button transparent onPress={this.getUserComplaintsHandler} >
                    <Text>View</Text>
                    </Button> */}
                <Button
                    titleStyle={{
                        fontSize: 12,
                    }}
                    type="clear"
                    title='View'
                    onPress={() => WebBrowser.openBrowserAsync('https://www.lawfirms.com/resources/traffic-tickets/moving-violations/other-common-moving-violations-other-than-speeding.htm')}
                    />
                    </Right>
                </ListItem>
            </ScrollView>
            
        );
    }
}

export default DataItem;