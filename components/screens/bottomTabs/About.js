import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const About = () => {
  return (
    <View style={{alignItems:'center',marginTop:20}}>
      <Text style={{fontSize:20,fontWeight:'500'}}>Made By :</Text>
      <Image source={require('../../images/esha.jpg')} style={styles.main}/>
      <Text style={{fontSize:30,fontWeight:'bold',color:'green'}}>Abhay Kumar Gupta</Text>
    </View>
  )
}

export default About

const styles = StyleSheet.create({
  main:{
    marginTop:20,
    height:500,
    width:350,
    borderRadius:35,
    borderWidth:5,
    borderColor:'green',
    marginBottom:20
  }
})