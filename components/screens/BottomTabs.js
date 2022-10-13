import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View,Text } from 'react-native';
import About from './bottomTabs/About';
import Home from './bottomTabs/Home';
import Profile from './bottomTabs/Profile';
import Search from './bottomTabs/Search';
import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
        screenOptions={{
            headerShown:false,
            tabBarShowLabel:false,
            tabBarStyle:{
                position:'absolute',
                // left:25,
                // right:25,
                // bottom:25,
                // borderRadius:25
                backgroundColor:'#ffffff',
                height:50,
                elevation:0,
              
            },
            tabBarActiveTintColor:'white',
            tabBarActiveBackgroundColor:'black',
            tabBarInActiveBackgroundColor:'white',
            tabBarLabelStyle:{
              fontSize:18,
              fontWeight:'500',
              fontFamily:'Roboto'
            }
            

            
        }}
        
    >
      <Tab.Screen name="Home"  component={Home} options={{
        tabBarIcon:({})=>(
            <View>
                <Entypo name='home' size={40} color={'red'} />
            </View>
        )
      
      }}/>
      <Tab.Screen name="Search" component={Search} 
      options={{
        tabBarIcon:({})=>(
            <View>
                <FontAwesome name='search' size={40} color={'red'} />
            </View>
        )}}
      
      />
      {/* <Tab.Screen name="Profile" component={Profile} 
        options={{
          tabBarIcon:({})=>(
              <View>
                  <Entypo name='user' size={40} color={'red'} />
              </View>
          )}}
        
      /> */}
      <Tab.Screen name="About" component={About} 
        options={{
          tabBarIcon:({})=>(
              <View>
                  <Entypo name='help-with-circle' size={40} color={'red'} />
              </View>
          )}}
        
      />
    </Tab.Navigator>
  );
}
export default MyTabs
