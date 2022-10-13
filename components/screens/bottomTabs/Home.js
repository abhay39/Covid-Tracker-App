import { RefreshControl,StatusBar, StyleSheet, Text, View,Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useLayoutEffect, useState,useCallback } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Foundation from 'react-native-vector-icons/Foundation'

const Home = () => {
    useLayoutEffect(()=>{
        fetchApi()
    },[])
    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    }

    const [refreshing, setRefreshing] = useState(false);

    const onRefresh =useCallback(() => {
        setRefreshing(true);
        fetchApi()
        wait(2000).then(() => setRefreshing(false));
      }, []);


    const [infected, setInfected]=useState(0)
    const [newInfected, setNewInfected]=useState(0)

    const [death, setDeath]=useState(0)
    const [newDeath, setNewDeath]=useState(0)

    const [recovered, setRecovered]=useState(0)
    const [newRecovered, setNewRecovered]=useState(0)

    const [activeCases, setActiveCases]=useState(0)

    const fetchApi=() => {
        fetch(`https://disease.sh/v3/covid-19/all`)
        .then(response => response.json())
        .then(response =>{
            // console.log(response.cases)
            setInfected((Math.abs(Number(response.cases)) / 1.0e+6).toFixed(2) + "M")
            

            // console.log(response.NewCases)
           setNewInfected((Math.abs(Number(response.todayCases)) / 1.0e+3).toFixed(2) + "K")

            // console.log(response[0].TotalDeaths)
            // 
            setDeath((Math.abs(Number(response.deaths)) / 1.0e+6).toFixed(2) + "M")

            // console.log(response[0].NewDeaths)
            setNewDeath((Math.abs(Number(response.todayDeaths)) / 1.0e+3).toFixed(2) + "K")
            

            // console.log(response[0].TotalRecovered)
            setRecovered(response.recovered)
            setRecovered((Math.abs(Number(response.recovered)) / 1.0e+6).toFixed(2) + "M")

            // console.log(response[0].NewRecovered)
            setNewRecovered((Math.abs(Number(response.todayRecovered)) / 1.0e+3).toFixed(2) + "K")
            

            // console.log(response[0].ActiveCases)
            // setActiveCases(response.active)
            setActiveCases((Math.abs(Number(response.active)) / 1.0e+6).toFixed(2) + "M")
        }).catch(err => console.error(err));
    }

  return (
    <ScrollView style={{backgroundColor:'#E5E5E5',height:'100%',flex:1,flexGrow:1,marginBottom:10}}
    refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      }
    >
        <View style={{flexDirection:'row',marginLeft:10,marginRight:10}}>
            <View style={{backgroundColor:'#EEEEEE', height:60,width:60,marginTop:20,borderRadius:50,alignItems:'center',justifyContent:'center',}}>
                <Image source={require('../../images/second.png')} style={{height:42.5,width:50}} />
            </View>
            <TouchableOpacity
                onPress={()=>fetchApi()}
            >
                <Ionicons name='notifications-outline' size={30} color='black' style={{
                    position:'absolute',
                    left:240,
                    top:30,
                }}/>
            </TouchableOpacity>
            <View style={{
                backgroundColor:'#EEEEEE',
                height:40,
                width:50,
                borderRadius:10,
                justifyContent:'center',
                position:'absolute',
                left:340,
                top:25,

            }}>
                <Text style={{
                    fontSize:18,
                    fontWeight:'400',
                    color:'black',
                    textAlign:'center'
                }}>ALL</Text>
            </View>
        </View>
        <ScrollView
            showsHorizontalScrollIndicator={false}
            style={{marginLeft:5,marginRight:5}}
        >
            <View style={{width:400,borderRadius:15}}>
                        <View style={{backgroundColor:'#26B899',height:200,width:'95%',marginLeft:10,marginRight:10,borderRadius:9,marginTop:10,padding:15,}}>
                        <Text style={{
                            fontSize:22,
                            color:'white',
                            fontWeight:'700',
                        }}>Are you feeling sick?</Text>
                        <Text style={{
                            marginRight:60,
                            fontSize:15,
                            color:'white',
                            marginTop:10,
                            width:'70%',
                        }}>If you feel sick with symptoms of Covid 19 please callus immediately for help.
                        </Text>
                        <View style={{flexDirection:'row',}}>
                        <TouchableOpacity style={{
                            backgroundColor:'#fff',
                            height:60,
                            width:200,
                            borderRadius:25,
                            flexDirection:'row',
                            justifyContent:'flex-start',
                            padding:10,
                            marginTop:15
                        }}>
                            <Foundation name='telephone' size={50} color='green' style={{
                                marginLeft:10,
                                marginTop:-2
                            }}/>
                            <Text style={{
                                fontSize:27,
                                fontWeight:'bold',
                                color:'green',
                                marginLeft:13,
                                marginTop:3
                            }}>Call Now</Text>
                        </TouchableOpacity>
                            <Image source={require('../../images/six.png')}  style={{
                                marginTop:-32,
                                height:120,
                                width:100,
                                marginLeft:55
                            }}/>
                        </View>
                    </View>
            </View>
    </ScrollView>
        
        <View style={{flexDirection:'row',justifyContent:'flex-start',marginLeft:10,marginRight:10,marginTop:10}}>
            <Text style={{fontSize:18,color:'black',fontWeight:'700'}}>Major Symptoms of</Text>
            <Text style={{fontSize:18,color:'#EC0101',fontWeight:'700'}}> COVID - 19</Text>
        </View>
            
        <View style={{
            flexDirection:'row',
            marginLeft:20,
            marginTop:10,
            marginRight:20,
            justifyContent:'space-between'
        }}>
            <View style={{
                backgroundColor:'#fff',
                height:88,
                width:89,
                borderRadius:15,
                alignItems:'center',
                justifyContent:'center'
            }}>
                <Image source={require('../../images/seven.png')} style={{
                    width:42,
                    height:40
                }} />
                <Text style={{
                    fontSize:15,
                    fontWeight:'500',
                    color:'black'
                }}>Headache</Text>
            </View>
            <View style={{
                backgroundColor:'#fff',
                height:88,
                width:89,
                borderRadius:15,
                alignItems:'center',
                justifyContent:'center'
            }}>
                <Image source={require('../../images/seven.png')} style={{
                    width:42,
                    height:40
                }} />
                <Text style={{
                    fontSize:15,
                    fontWeight:'500',
                    color:'black'
                }}>Cough</Text>
            </View>
            <View style={{
                backgroundColor:'#fff',
                height:88,
                width:89,
                borderRadius:15,
                alignItems:'center',
                justifyContent:'center'
            }}>
                <Image source={require('../../images/seven.png')} style={{
                    width:42,
                    height:40
                }} />
                <Text style={{
                    fontSize:15,
                    fontWeight:'500',
                    color:'black'
                }}>Fever</Text>
            </View>
        </View>

        <View style={{flexDirection:'row',justifyContent:'flex-start',marginLeft:10,marginRight:10,marginTop:10}}>
            <Text style={{fontSize:18,color:'green',fontWeight:'700'}}>Preventions</Text>
        </View>
            
        <View style={{
            flexDirection:'row',
            marginLeft:20,
            marginTop:10,
            marginRight:20,
            justifyContent:'space-between'
        }}>
            <View style={{textAlign:'center',alignItems:'center'}}>
                <View style={{
                        backgroundColor:'#CFFCDD',
                        height:90.97,
                        width:90.97,
                        borderRadius:35,
                        alignItems:'center',
                        justifyContent:'center'
                    }}>
                        <Image source={require('../../images/eight.png')} style={{
                            width:65.22,
                            height:65.53
                        }} />
                        
                    </View>
                <View style={{flexDirection:'column'}}>
                            <Text style={{
                                fontSize:15,
                                fontWeight:'500',
                                color:'black',
                            }}>Wash Hand</Text>
                </View>
            </View>

            <View style={{textAlign:'center',alignItems:'center'}}>
                <View style={{
                        backgroundColor:'#CFFCDD',
                        height:90.97,
                        width:90.97,
                        borderRadius:35,
                        alignItems:'center',
                        justifyContent:'center'
                    }}>
                        <Image source={require('../../images/nine.png')} style={{
                            width:65.22,
                            height:65.53
                        }} />
                        
                    </View>
                <View style={{flexDirection:'column'}}>
                            <Text style={{
                                fontSize:15,
                                fontWeight:'500',
                                color:'black',
                            }}>Wear Mask</Text>
                </View>
            </View>

            <View style={{textAlign:'center',alignItems:'center'}}>
                <View style={{
                        backgroundColor:'#CFFCDD',
                        height:90.97,
                        width:90.97,
                        borderRadius:35,
                        alignItems:'center',
                        justifyContent:'center'
                    }}>
                        <Image source={require('../../images/ten.png')} style={{
                            width:65.22,
                            height:65.53
                        }} />
                        
                    </View>
                <View style={{flexDirection:'column'}}>
                            <Text style={{
                                fontSize:15,
                                fontWeight:'500',
                                color:'black',
                            }}>Clean Disinfect</Text>
                </View>
            </View>
        </View>
        <Text style={{
            fontSize:22,
            color:'black',
            fontWeight:'bold',
            marginLeft:10,marginTop:20
        }}>COVID -19 WorldWide</Text>
        <View style={{marginLeft:10,marginTop:15}}>
            <View style={{flexDirection:'row',}}>
                <Text style={{position:'absolute',color:'#515151',fontSize:18,left:50,fontWeight:'600'}}>Infected:</Text>
                <Text style={{color:'#F30000',marginLeft:160,fontSize:18,fontWeight:'500'}}>{infected}</Text>
                <Text style={{color:'#8F00FF',marginLeft:10,fontSize:18,fontWeight:'500'}}>+{newInfected}</Text>
            </View>
            <View style={{flexDirection:'row',marginTop:10}}>
                <Text style={{position:'absolute',color:'#515151',fontSize:18,left:50,fontWeight:'600'}}>Death:</Text>
                <Text style={{color:'#F30000',marginLeft:160,fontSize:18,fontWeight:'500'}}>{death}</Text>
                <Text style={{color:'#8F00FF',marginLeft:10,fontSize:18,fontWeight:'500'}}>+{newDeath}</Text>
            </View>
            <View style={{flexDirection:'row',marginTop:10}}>
                <Text style={{position:'absolute',color:'#515151',fontSize:18,left:50,fontWeight:'600'}}>Recovered:</Text>
                <Text style={{color:'#3AB826',marginLeft:160,fontSize:18,fontWeight:'500'}}>{recovered}</Text>
                <Text style={{color:'#8F00FF',marginLeft:10,fontSize:18,fontWeight:'500'}}>+{newRecovered}</Text>
            </View>
        </View>

        <View style={{flexDirection:'row',justifyContent:'flex-start',marginLeft:10,marginRight:10,marginTop:10}}>
            <Text style={{fontSize:22,color:'black',fontWeight:'700'}}>Statistics</Text>
            
        </View>
        <Image source={require('../../images/twelve.png')} style={{
                        marginTop:-35,
                        width:60,
                        height:60,
                        marginLeft:320
        }} />
        <View style={{
            flexDirection:'row',
            marginLeft:30,
            marginTop:5,
            marginRight:30,
            justifyContent:'space-between',
            
        }}>
            <View style={{
                backgroundColor:'#fff',
                height:85,
                width:170,
                borderRadius:15,
                padding:10,
                justifyContent:'flex-start',
                
            }}>
                <View style={{flexDirection:'row'}}>
                    <Image source={require('../../images/fourteen.png')} style={{
                        width:22,
                        height:20
                    }} />
                    <Text style={{
                        fontSize:13,
                        fontWeight:'500',
                        color:'black',marginLeft:5
                    }}>Confirmed Cases</Text>
                </View>
                <View style={{flexDirection:'row',marginTop:7}}>
                    <Text style={{fontSize:15,
                        fontWeight:'bold',
                        color:'black',marginLeft:6}}>{infected}</Text>
                    <Image source={require('../../images/ninteen.png')} style={{
                        marginLeft:10,
                        width:60,
                        height:21
                    }} />
                </View>
                <Text style={{fontSize:15,
                        fontWeight:'bold',
                        color:'black',marginLeft:6}}>People</Text>
            </View>
            
            <View style={{
                backgroundColor:'#fff',
                height:85,
                width:170,
                borderRadius:15,
                padding:10,
                justifyContent:'flex-start',
                
            }}>
                <View style={{flexDirection:'row'}}>
                    <Image source={require('../../images/fifteen.png')} style={{
                        width:22,
                        height:20
                    }} />
                    <Text style={{
                        fontSize:15,
                        fontWeight:'500',
                        color:'black',marginLeft:10
                    }}>Total Death</Text>
                </View>
                <View style={{flexDirection:'row',marginTop:7}}>
                    <Text style={{fontSize:15,
                        fontWeight:'bold',
                        color:'black',marginLeft:6}}>{death}</Text>
                    <Image source={require('../../images/twintyone.png')} style={{
                        marginLeft:13,
                        width:67,
                        height:23
                    }} />
                </View>
                <Text style={{fontSize:15,
                        fontWeight:'bold',
                        color:'black',marginLeft:6}}>People</Text>
            </View>
        </View>

        {/* second portion */}
        <View style={{
            flexDirection:'row',
            marginLeft:30,
            marginTop:20,
            marginRight:30,
            justifyContent:'space-between',
            
        }}>
            <View style={{
                backgroundColor:'#fff',
                height:85,
                width:170,
                borderRadius:15,
                padding:10,
                justifyContent:'flex-start',
                
            }}>
                <View style={{flexDirection:'row'}}>
                    <Image source={require('../../images/sixteen.png')} style={{
                        width:22,
                        height:20
                    }} />
                    <Text style={{
                        fontSize:14,
                        fontWeight:'500',
                        color:'black',marginLeft:5
                    }}>Total Recovered</Text>
                </View>
                <View style={{flexDirection:'row',marginTop:7}}>
                    <Text style={{fontSize:15,
                        fontWeight:'bold',
                        color:'black',marginLeft:6}}>{recovered}</Text>
                    <Image source={require('../../images/twinty.png')} style={{
                        marginLeft:10,
                        width:60,
                        height:21
                    }} />
                </View>
                <Text style={{fontSize:15,
                        fontWeight:'bold',
                        color:'black',marginLeft:6}}>People</Text>
            </View>
            
            <View style={{
                backgroundColor:'#fff',
                height:85,
                width:170,
                borderRadius:15,
                padding:10,
                justifyContent:'flex-start',
                
            }}>
                <View style={{flexDirection:'row'}}>
                    <Image source={require('../../images/seventeen.png')} style={{
                        width:22,
                        height:20
                    }} />
                    <Text style={{
                        fontSize:15,
                        fontWeight:'500',
                        color:'black',marginLeft:10
                    }}>Total Active</Text>
                </View>
                <View style={{flexDirection:'row',marginTop:7}}>
                    <Text style={{fontSize:15,
                        fontWeight:'bold',
                        color:'black',marginLeft:6}}>{activeCases}</Text>
                    <Image source={require('../../images/twintytwo.png')} style={{
                        marginLeft:13,
                        width:67,
                        height:23
                    }} />
                </View>
                <Text style={{fontSize:15,
                        fontWeight:'bold',
                        color:'black',marginLeft:6}}>People</Text>
            </View>
        </View>
        <View style={{width:400}}>
                        <View style={{backgroundColor:'#26B899',height:200,width:'95%',marginLeft:10,marginRight:10,borderRadius:9,marginTop:10,padding:15,}}>
                        <Text style={{
                            fontSize:22,
                            color:'white',
                            fontWeight:'700',
                        }}>Are you feeling sick?</Text>
                        <Text style={{
                            marginRight:60,
                            fontSize:15,
                            color:'white',
                            marginTop:10,
                            width:'70%'
                        }}>If you feel sick with symptoms of Covid 19 please callus immediately for help.
                        </Text>
                        <View style={{flexDirection:'row',}}>
                        <TouchableOpacity style={{
                            backgroundColor:'#fff',
                            height:60,
                            width:200,
                            borderRadius:25,
                            flexDirection:'row',
                            justifyContent:'flex-start',
                            padding:10,
                            marginTop:15
                        }}>
                            <Foundation name='telephone' size={50} color='green' style={{
                                marginLeft:10,
                                marginTop:-2
                            }}/>
                            <Text style={{
                                fontSize:27,
                                fontWeight:'bold',
                                color:'green',
                                marginLeft:13,
                                marginTop:3
                            }}>Call Now</Text>
                        </TouchableOpacity>
                            <Image source={require('../../images/eleven.png')}  style={{
                                marginTop:-60,
                                height:147,
                                width:171,
                                marginLeft:5
                            }}/>
                        </View>
                    </View>
            </View>


        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        </ScrollView>
    )
}

export default Home

const styles = StyleSheet.create({})