import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper';
import { useNavigation } from '@react-navigation/native';

const Splash = () => {
    const navigation=useNavigation()
  return (
    <View style={{backgroundColor:'#fff',height:'100%',}}>
        <View style={{backgroundColor:'#EEEEEE', height:90,width:90,marginTop:20,borderRadius:50,alignItems:'center', justifyContent:'center',position:'relative',marginLeft:160}}>
            <Image source={require('../images/second.png')} style={{height:64,width:75}} />
        </View>
        <View style={{justifyContent:'center',alignItems:'center',marginTop:20}}>
            <Text style={styles.headerTitle}>COVID - 19</Text>
            <Text style={styles.headerSub}>CoronaVirus Tracker App</Text>
        </View>
        <Onboarding 
        onSkip={()=> navigation.replace('Dashboard')}
        onDone={()=> navigation.replace('Dashboard')}
        containerStyles={{
            marginTop:-150
        }}
        titleStyles={{
            fontSize:30,
            fontFamily:'Roboto',
            fontWeight:'900',
        }}
        subTitleStyles={{
            fontSize:18,
            fontWeight:'400',
            fontFamily:'Roboto',
        }}
        pages={[
            {
                backgroundColor:'#fff',
                title:'All You Need To Know About Covid - 19',
                subtitle:'Coronavirus COVID - 19 is an infections disease caused by a newly discovered coronavirus.',
                image: <Image source={require('../images/first.png')} style={{
                    width:377, height:305
                }}/>
            },
            {
                backgroundColor:'#fff',
                title:'Wash Your Hands',
                subtitle:'Coronavirus COVID - 19 is an infections disease caused by a newly discovered coronavirus.',
                image: <Image source={require('../images/third.png')} style={{
                    width:320, height:225
                }}/>
            },
            
            {
                backgroundColor:'#fff',
                title:'Wear Mask',
                subtitle:'Coronavirus COVID - 19 is an infections disease caused by a newly discovered coronavirus.',
                image: <Image source={require('../images/forth.png')} style={{
                    width:330, height:227
                }}/>
            },
            {
                backgroundColor:'#fff',
                title:'Social Distancing',
                subtitle:'Coronavirus COVID - 19 is an infections disease caused by a newly discovered coronavirus.',
                image: <Image source={require('../images/five.png')} style={{
                    width:304, height:190
                }}/>
            },
        ]}
    />
    </View>
    
  )
}

export default Splash

const styles = StyleSheet.create({
    headerTitle:{
        color:'black',
        fontWeight:'bold',
        fontSize:35,
        // lineHeight:30,
        fontFamily:'Roboto'
    },
    headerSub:{
        color:'black',
        fontWeight:'bold',
        fontSize:30,
        // lineHeight:30,
        fontFamily:'Roboto'
    },
})