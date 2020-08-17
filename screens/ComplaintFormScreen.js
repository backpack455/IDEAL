import React, { Component } from 'react';
import {Label, Container, Header, Content, Form, Item, Input, Button, Left, Textarea} from 'native-base';
import {Text, Icon, Dimensions, Image, View, StatusBar} from 'react-native'
import { StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import * as Permissions from 'expo-permissions';
import * as firebase from 'firebase'
import Firebasekeys from './../config'
import 'firebase/firestore';

const themecolor = '#fff'
const tabcolor = '#ff1616'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

let currentUserpoints = '1,000';
let firebaseConfig = Firebasekeys
console.disableYellowBox =true;

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default class FormExample extends Component {
  state = {
    photo: null, 
    submissionStatus: false,
    date: '',
    location: '',
    time: '',
    extra: '', 
    make: '',
    license: '',
    model: '',
    type: '',
    color: '',
    title: ','
  };
  componentDidMount() {
    this.getPermissionAsync();
  }
  getPermissionAsync = async () => {
    if (true) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        Alert.alert('Sorry, we need camera roll permissions!');
      }
    }
  };
  handleChoosePhoto = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.cancelled) {
        this.setState({ photo: result.uri });
      }

      console.log(result);
    } catch (E) {
      console.log(E);
    }
  };

  submissionHandler = () => {
    firebase.auth().onAuthStateChanged(user => {

      const db = firebase.firestore().collection('users')
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
          .collection('complaints')
          .doc(this.state.title)
          .set({
            date: this.state.date,
            location: this.state.location,
            time: this.state.time,
            extra: this.state.extra, 
            make: this.state.make,
            license: this.state.license,
            model: this.state.model,
            type: this.state.type,
            color: this.state.color,
          })
  })
    setTimeout(() => {
        this.props.navigation.goBack()
    }, 2000)
  }

  onChangeTextDate = (text) => {
    this.setState({
      date: text,
    })
  }
  onChangeTextLocation = (text) => {
    this.setState({
      location: text,
    })
  }
  onChangeTextTime = (text) => {
    this.setState({
      time: text,
    })
  }
  onChangeTextExtra = (text) => {
    this.setState({
      extra: text,
    })
  }
  onChangeTextMake = (text) => {
    this.setState({
      make: text,
    })
  }
  onChangeTextModel = (text) => {
    this.setState({
      model: text,
    })
  }
  onChangeTextTime = (text) => {
    this.setState({
      time: text,
    })
  }
  onChangeTextDate = (text) => {
    this.setState({
      date: text,
    })
  }
  onChangeTextColor = (text) => {
    this.setState({
      color: text,
    })
  }
  onChangeTextType = (text) => {
    this.setState({
      type: text,
    })
  }
  onChangeTextLicense = (text) => {
    this.setState({
      license: text,
    })
  }
  onChangeTextTitle = (text) => {
    this.setState({
      title: text,
    })
  }
  render() {
    const {photo, submissionStatus} = this.state

    return (
      <Container>
        <Content>
            <StatusBar barStyle="light-content"/>
        <Text style={{fontSize: 16, paddingLeft: 10, marginBottom: 10, paddingTop: 20}}>Complaint Form:   </Text>
        <View
            style={{
                borderTopWidth: 6,
                borderTopColor: `${tabcolor}`,
                borderRadius: 3,
                width: 140,
                marginBottom: 10
            }}
            />
          <Form>
            <Item stackedLabel>
              <Label>Title of Complaint</Label>
              <Input style={FormStyles.formInput} onChangeText={this.onChangeTextTitle}/>
            </Item>
            <Item stackedLabel>
              <Label>Make of the Car</Label>
              <Input style={FormStyles.formInput} onChangeText={this.onChangeTextMake}/>
            </Item>
            <Item stackedLabel>
              <Label>Model of the Car</Label>
              <Input style={FormStyles.formInput} onChangeText={this.onChangeTextModel}/>
            </Item>
            <Item stackedLabel>
              <Label>Color of the Car</Label>
              <Input style={FormStyles.formInput} onChangeText={this.onChangeTextColor}/>
            </Item>
            <Item stackedLabel>
              <Label>Date of Violation</Label>
              <Input style={FormStyles.formInput} onChangeText={this.onChangeTextDate}/>
            </Item>
            <Item stackedLabel>
              <Label>Time of Violation</Label>
              <Input style={FormStyles.formInput} onChangeText={this.onChangeTextTime}/>
            </Item>
            <Item stackedLabel>
              <Label>Place of Violation</Label>
              <Input style={FormStyles.formInput} onChangeText={this.onChangeTextLocation}/>
            </Item>
            <Item stackedLabel>
              <Label>Type of Violation</Label>
              <Input style={FormStyles.formInput} onChangeText={this.onChangeTextType}/>
            </Item>
            <Item stackedLabel>
              <Label>License Plate Number</Label>
              <Input style={FormStyles.formInput} onChangeText={this.onChangeTextLicense}/>
            </Item>
            <Content padder stackedLabel>
              <Form>
                <Textarea rowSpan={3} placeholder="Any useful or additional information you would like to provide." style={FormStyles.formInput} onChangeText={this.onChangeTextExtra} />
                <Item></Item>
              </Form>
            </Content>
            <Item stackedLabel>
              <Label>Pictures</Label>
              <Text></Text>
              <Button style={{backgroundColor: '#fff', alignSelf: "stretch"}} small onPress={this.handleChoosePhoto}>
                <Text style={{color: '#0000EE', textAlign: 'center'}}>Any Photos?</Text>
              </Button>
              {
                photo && (
                  <Image
                  source={{ uri: this.state.photo }}
                  style={{width: 50, height: 50}}
                  />
                )}
            </Item>
            <Button style={{backgroundColor: `${tabcolor}`, alignSelf: "stretch", flex: 1}} onPress={this.submissionHandler}>
              <Text style={{color: `${themecolor}`, textAlign: 'center', paddingLeft: 200}}>Submit</Text>
              </Button>
              {
              submissionStatus && (<Text style={FormStyles.success}>
                Submitted!
              </Text>)}
          </Form>
        </Content>
      </Container>
    );
  }
}

const FormStyles = StyleSheet.create({
  formInput: {
    padding: 10,

  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bold: {
    color: '#000'
  },
  success: {
    color: '#4bb543'
  }
})