import { StyleSheet, Text, View,Image, TextInput, TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import { useNavigation } from '@react-navigation/native'

const Register = () => {
    const navigation=useNavigation()

    const [username, setUserName]=useState('')
    const [password, setPassword]=useState('')
    const [rePassword, setRePassword]=useState('')

  return (
    <View style={{backgroundColor:'#fff',height:'100%',}}>
        <View style={{backgroundColor:'#EEEEEE', height:90,width:90,marginTop:20,borderRadius:50,alignItems:'center', justifyContent:'center',position:'relative',marginLeft:160}}>
            <Image source={require('../images/second.png')} style={{height:64,width:75}} />
        </View>
        <View style={{justifyContent:'center',alignItems:'center',marginTop:20}}>
            <Text style={styles.headerTitle}>COVID - 19</Text>
            <Text style={styles.headerSub}>CoronaVirus Tracker App</Text>
        </View>
        <View style={{justifyContent:'center',alignItems:'center',marginTop:40}}>
            <Text style={styles.reg}>Register</Text>
            <Text style={styles.regSub}>Register With us to be aware with COVID - 19</Text>
        </View>
        <View style={{
            marginTop:40,
            width:'90%',
            marginLeft:20,
            
        }}>
            <TextInput 
                placeholder='Username or email'
                keyboardType='email'
                
                style={{
                    fontSize:18,
                    borderBottomColor:'gray',
                    borderBottomWidth:1.5
                }}
                onChangeText={(text)=>setUserName(text)}
                // onSubmitEditing={(text)=>setUserName(text)}
            />
            
            <TextInput 
                placeholder='Password'
                keyboardType='password'
                secureTextEntry={true}
                autoCapitalize={false}
                style={{
                    marginTop:10,
                    fontSize:18,
                    borderBottomColor:'gray',
                    borderBottomWidth:1.5
                }}
                onChangeText={(text)=>setPassword(text)}
            />
            <TextInput 
                placeholder='Re- Type Password'
                keyboardType='password'
                secureTextEntry={true}
                autoCapitalize={false}
                style={{
                    marginTop:10,
                    fontSize:18,
                    borderBottomColor:'gray',
                    borderBottomWidth:1.5
                }}
                onChangeText={(text)=>setRePassword(text)}
                onSubmitEditing={
                    ()=>
                    {
                        if(password!=rePassword){
                            alert('Password and  repassword are wrong😢😢')
                        }
                        else{
                            alert('You have successfully Create your account❤❤❤')
                            navigation.navigate('Dashboard')
                        }
                    }
                }
            />
            <TouchableOpacity style={{
                backgroundColor:'black',
                height:60,
                width:320,
                marginLeft:25,
                marginTop:20,
                justifyContent:'center',
                alignContent:'center',
                alignItems:'center',
                borderRadius:25
                
            }}>
                <Text style={{fontSize:28,color:'#00FFC9',fontWeight:'400',fontFamily:'Roboto'}}>Register</Text>
            </TouchableOpacity>
            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop:10}}>
                <Text style={styles.already}>Already have an account?</Text>
                <TouchableOpacity
                    onPress={()=>navigation.navigate('Loginscreen',{
                        paramKey:username,
                        paramKey1:password,
                        paramKey2:rePassword,
                    })}
                >
                    <Text style={styles.login}> Login</Text>
                </TouchableOpacity>
            </View>
        </View>
        
    </View>
    
  )
}

export default Register

const styles = StyleSheet.create({
    headerTitle:{
        color:'black',
        fontWeight:'bold',
        fontSize:35,
        // lineHeight:30,
        fontFamily:'Roboto'
    },
    reg:{
        color:'#26B899',
        fontWeight:'bold',
        fontSize:30,
        // lineHeight:30,
        fontFamily:'Roboto',
    },
    headerSub:{
        color:'black',
        fontWeight:'bold',
        fontSize:30,
        // lineHeight:30,
        fontFamily:'Roboto'
    },
    regSub:{
        color:'black',
        fontSize:17,
        // lineHeight:30,
        fontFamily:'Roboto'
    },
    already:{
        fontSize:20,
        color:'black',
        fontWeight:'500'
    },
    login:{
        fontSize:20,
        color:'#029172',
        fontWeight:'500'
    }
})