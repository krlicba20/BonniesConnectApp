import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
// Calls all of the .js files that contain each page of the app
import Login from '/Users/b17kr/BonniesConnectApp/android/app/src/Login.js';
import Home from '/Users/b17kr/BonniesConnectApp/android/app/src/Home.js';
import Athletics from '/Users/b17kr/BonniesConnectApp/android/app/src/Athletics.js';
import StudentEvents from '/Users/b17kr/BonniesConnectApp/android/app/src/StudentEvents.js';
import News from '/Users/b17kr/BonniesConnectApp/android/app/src/News.js';
import StudentResources from '/Users/b17kr/BonniesConnectApp/android/app/src/StudentResources.js';
import Profile from '/Users/b17kr/BonniesConnectApp/android/app/src/Profile.js';
import Dining from '/Users/b17kr/BonniesConnectApp/android/app/src/Dining.js';
import TechServices from '/Users/b17kr/BonniesConnectApp/android/app/src/TechServices.js';
import SafetySecurity from '/Users/b17kr/BonniesConnectApp/android/app/src/SafetySecurity.js';
import HealthCenter from '/Users/b17kr/BonniesConnectApp/android/app/src/HealthCenter.js';
import CampusMap from '/Users/b17kr/BonniesConnectApp/android/app/src/CampusMap.js';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Athletics') {
            iconName = focused ? 'basketball' : 'basketball-outline';
          } else if (route.name === 'Student Events') {
            iconName = focused ? 'calendar' : 'calendar-outline';
          } else if (route.name === 'News') {
            iconName = focused ? 'newspaper' : 'newspaper-outline';
          } else if (route.name === 'Student Resources') {
            iconName = focused ? 'school' : 'school-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Athletics" component={Athletics} />
      <Tab.Screen name="Student Events" component={StudentEvents} />
      <Tab.Screen name="News" component={News} />
      <Tab.Screen name="Student Resources" component={StudentResources} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

const BonniesConnectApp = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen
          name="Main"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
        {/* Add all your screens here */}
        <Stack.Screen name="Dining" component={Dining} />
        <Stack.Screen name="Safety & Security" component={SafetySecurity} />
        <Stack.Screen name="Tech Services" component={TechServices} />
        <Stack.Screen name="Health Center" component={HealthCenter} />
        <Stack.Screen name="Campus Map" component={CampusMap} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default BonniesConnectApp;
