import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Profile = ({route}) => {
  const navigation=useNavigation()

  // let a=route.params.paramKey1;
  // let b=route.params.paramKey2;
  // console.log(a,b)

  return (
    <View style={{marginTop:10}}>
      <View style={{alignItems:'center',justifyContent:'center'}}>
        <Text style={{fontSize:35,color:'red',fontWeight:'bold',letterSpacing:1.5}}>Profile</Text>
      </View>
      <View style={{alignItems:'center',justifyContent:'center',marginTop:40}}>
        <Image source={require('../../images/esha.jpg')} style={styles.profile}/>
        <Text style={{fontSize:25,color:'black',fontWeight:'500',marginTop:30}}>Name: Abhay Kumar Gupta</Text>
        <Text style={{fontSize:25,color:'black',fontWeight:'500',marginTop:10}}>Password: abhay</Text>
        <TouchableOpacity style={{backgroundColor:'red',width:120, height:50,borderRadius:50,alignItems:'center',justifyContent:'center',marginTop:40}}
          onPress={()=>navigation.navigate('Loginscreen')}
        >
          <Text style={{fontSize:20,color:'white',fontWeight:'600'}}>Logout</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  profile:{
    borderWidth:2,
    height:200,
    width:200,
    borderBottomColor:'red',
    borderRadius:100,
    borderColor:'yellow'
  }
})