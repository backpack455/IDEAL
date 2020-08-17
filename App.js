import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator, MaterialBottomTabView } from '@react-navigation/material-bottom-tabs';
import LoginScreen from'./screens/LoginScreen'
import HomeScreen from'./screens/HomeScreen'
import {MaterialIcons ,Ionicons, Octicons, Entypo, MaterialCommunityIcons} from '@expo/vector-icons'
import ResourcesScreen from './screens/ResourcesScreen'
import MapsScreen from './screens/MapsScreen'
import AnalyticsScreen from './screens/AnalyticsScreen'
import  {Button, Alert, StatusBar} from 'react-native'
import RegisterScreen from './screens/RegisterScreen'
import PrizeScreen from './screens/PrizeScreen'
import SubmittedComplaintsScreen from './screens/SubmittedComplaintsScreen'
import {IconButton, Colors} from 'react-native-paper'
import ComplaintFormScreen from './screens/ComplaintFormScreen'
import Firebasekeys from './config'
import * as firebase from 'firebase'

import 'firebase/firestore';

const themecolor = '#fff'
const tabcolor = '#ff1616'
const Tab = createMaterialBottomTabNavigator();
const Auth = createStackNavigator();
const JobsStack = createStackNavigator()
const CoursesStack = createStackNavigator()
const TJStack = createStackNavigator()
const FundingStack = createStackNavigator()

let firebaseConfig = Firebasekeys
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
let user = firebase.auth().currentUser
const db = firebase.firestore()
function ResourcesSection() {
  return (
    <CoursesStack.Navigator initialRouteName="Resources"
    screenOptions={{
      headerStyle: {
        backgroundColor: `${tabcolor}`,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        color: `${themecolor}`
      },
    }}
    >
      <CoursesStack.Screen name="Resources" component={ResourcesScreen}
        options={{
          headerTitle: "Resources",
          headerLeft: null,
        }}
      />
    </CoursesStack.Navigator>
  );
}
function PrizesSection() {
  return (
    <FundingStack.Navigator initialRouteName="Prize Redemption"
    screenOptions={{
      headerStyle: {
        backgroundColor: `${tabcolor}`,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        color: `${themecolor}`
      },
    }}
    >
      <FundingStack.Screen name="Prize Redemption" component={PrizeScreen}
        options={{
          headerTitle: "Prize Redemption",
          headerLeft: null,
        }}
      />
    </FundingStack.Navigator>
  );
}
function RASection() {
  return (
    <TJStack.Navigator initialRouteName="Analytics"
    screenOptions={{
      headerStyle: {
        backgroundColor: `${tabcolor}`,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        color: `${themecolor}`
      },
    }}
    >
      <TJStack.Screen name="Search" component={MapsScreen}
        options={{
          headerTitle: "Search",
          headerLeft: null,
        }}
      />
       <TJStack.Screen name="Road Analytics" component={AnalyticsScreen}
        options={{
          headerTitle: "Road Analytics",
        }}
      />
    </TJStack.Navigator>
  );
}

signOutUser = () => {
  firebase.auth().signOut()
}
function HomeSection() {
  return (
    <FundingStack.Navigator initialRouteName="Home"
    screenOptions={{
      headerStyle: {
        backgroundColor: `${tabcolor}`,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        color: `${themecolor}`
      },
    }}
    >
      <FundingStack.Screen name="Home" component={HomeScreen}
        options={{
          headerTitle: "Home",
          headerLeft: () => (<IconButton color={'#fff'} icon="share" size={24} onPress={() => Alert.alert('Signed out')}/>),
        }}
      />
      <FundingStack.Screen name="Submitted Complaints" component={SubmittedComplaintsScreen}
        options={{
          headerTitle: "Submitted Complaints",
        }}
      />
      <FundingStack.Screen name="Complaint Form" component={ComplaintFormScreen}
        options={{
          headerTitle: "Complaint Form",
        }}
      />  
    </FundingStack.Navigator>
  );
}

function checkForUser(){
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
     console.log('user is signed in')
     let signedIn = true;
     return true
    } else {
     console.log('user is not signed in')
     let signedIn = false;
    return false
    }
  });
}
function MainTabs(){
  return(
  <Tab.Navigator
          initialRouteName="Home"
          sceneAnimationEnabled="true"
          activeColor={themecolor}
          inactiveColor={themecolor}
          barStyle={{ backgroundColor: `${tabcolor}` }}
          
        >
          <Tab.Screen name="Home" component={HomeSection} 
          options={{
            tabBarIcon: ({color}) => (
              <Ionicons name="ios-home" size={24} color={themecolor} />
            ),
          }}
          />

          <Tab.Screen name="Prizes" component={PrizesSection} 
          options={{
            tabBarIcon: ({color}) => (
              <MaterialIcons name="attach-money" size={26} color={themecolor} />
            ),
            headerTitle: "Resources",
          }}
          />
          <Tab.Screen name="Road Analytics" component={RASection} 
          options={{
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons name="google-analytics" size={24} color={themecolor} />
            ),
          }}
          />
          <Tab.Screen name="Resources" component={ResourcesSection}
          options={{
            tabBarIcon: ({color}) => (
              <MaterialIcons name="library-books" size={24} color={themecolor}/>
            )
          }}
          /> 
        </Tab.Navigator>)
}
function MainAuthNavigator(){
  return(
  <Auth.Navigator 
  initialRouteName="Login"
  screenOptions={{
    headerShown: false
  }}
  >
    <Auth.Screen name="Login" component={LoginScreen}
      options={{
        headerTitle: "Complaint Form Submission",

      }}
    />
    <Auth.Screen name="Register" component={RegisterScreen}
      options={{
        headerTitle: "Complaint Form Submission",

      }}
     />
     {/* <Auth.Screen name="MainTabs" component={MainTabs}
       options={{
         headerTitle: "Complaint Form Submission",

       }}
    /> */}
  </Auth.Navigator>)
}

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false)
  React.useEffect(() => {
    firebase.auth().onAuthStateChanged(authUser => {
      if (authUser) {
        return setIsLoggedIn(true)
      } else {
        return false
      }
    })
  }, [])

    return (
      <NavigationContainer>
         {isLoggedIn === true ? <MainTabs/> : <MainAuthNavigator />}
      </NavigationContainer>
    )
}



