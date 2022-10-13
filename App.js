import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Splash from './components/screens/Splash'
import Login from './components/screens/Login'
import Register from './components/screens/Register'
import AsyncStorage from '@react-native-community/async-storage'
import DashBoard from './components/screens/DashBoard'
import About from './components/screens/bottomTabs/About'
import Profile from './components/screens/bottomTabs/Profile'
import Home from './components/screens/bottomTabs/Home'
import Search from './components/screens/bottomTabs/Search'

const Stack=createStackNavigator()

const App = () => {
  const [isFirstLaunch, setIsFirstLaunch]=useState(null)

  useEffect(()=>{
    AsyncStorage.getItem('alreadyLaunched').then(value=>{
      if(value==null){
        AsyncStorage.setItem('alreadyLaunched', 'true');
        setIsFirstLaunch(true);
      }
      else{
        setIsFirstLaunch(false)
      }
    });
  },[])

  if(isFirstLaunch===null){
    return null;
  }else if(isFirstLaunch===true){
    return(
      <NavigationContainer>
        <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'}/>
        <Stack.Navigator
        screenOptions={{
          headerShown:false
        }}
        >
          <Stack.Screen name='Splash' component={Splash} />
          {/* <Stack.Screen name='Register' component={Register} /> */}
          {/* <Stack.Screen name='Loginscreen' component={Login} /> */}
          <Stack.Screen name='Dashboard' component={DashBoard} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  } else{
    return (
      <NavigationContainer>
        <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'}/>
        <Stack.Navigator
        screenOptions={{
          headerShown:false
        }}
        >
          {/* <Stack.Screen name='Loginscreen' component={Login} /> */}
          {/* <Stack.Screen name='Register' component={Register} /> */}
          <Stack.Screen name='Dashboard' component={DashBoard} />
          <Stack.Screen name='About' component={About} />
          <Stack.Screen name='Profile' component={Profile} />
          <Stack.Screen name='Home' component={Home} />
          <Stack.Screen name='Search' component={Search} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

export default App;