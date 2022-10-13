import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const Search = () => {

  useEffect(()=>{
    fetchApi()
  })
  const [countryName, setCountryName]=useState('India')
  const [details,setDetails]=useState([])

  const [shortName, setShortName]=useState('')
  const [flag, setFlag]=useState('https://disease.sh/assets/img/flags/in.png')


  const fetchApi=() => {
    fetch(`https://disease.sh/v3/covid-19/countries/${countryName}`)
    .then(response => response.json())
    .then(response =>{
        // console.log(response)
        setShortName(response.countryInfo.iso3)
        setFlag(response.countryInfo.flag)
        // console.log(response.countryInfo.flag)
        setDetails(response)
        // console.log(details)
    }).catch(err => console.error(err));
  }
  const getMovies = async () => {
    try {
     const response = await fetch('https://disease.sh/v3/covid-19/countries/India');
     const json = await response.json();
     setDetails(json);
     console.log(json)
   } catch (error) {
     console.error(error);
   } finally {
     
   }
 }
//  let a=details.countryInfo.flag
//  console.log(a)

  return (
    <View style={{flex:1}}>
     <View style={{flexDirection:'row'}}>
        <TextInput placeholder='Enter the country name' style={styles.inputBox}
          onChangeText={(text)=>{setCountryName(text)}}
          onSubmitEditing={()=>fetchApi()}

        />
        <TouchableOpacity onPress={()=>fetchApi()}>
          <FontAwesome name='search' size={40} color={'green'} style={{marginTop:30,marginLeft:30}}/>
        </TouchableOpacity>
     </View>
     <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 30 }}>
        {/* <Image source={{ uri: flag}} resizeMode='cover' style={{height:100,width:200}}/>  */}
        <Text style={{marginTop:10,fontSize:35,fontWeight:'500',color:'green'}}>{details.country}</Text>
      </View>
      <ScrollView 
        // showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
          <View style={{marginTop:30,marginLeft:20,width:'89%',backgroundColor:'#26B899',borderRadius:25,padding:20}}>
             <Text style={{fontSize:22,fontWeight:'400',color:'white'}}>Short Name : {shortName}</Text>
            <Text style={{marginTop:10,fontSize:22,fontWeight:'400',color:'white'}}>Continent : {details.continent}</Text>
            <Text style={{marginTop:10,fontSize:22,fontWeight:'400',color:'white'}}>Total Population : {details.population}</Text>
            <Text style={{marginTop:10,fontSize:22,fontWeight:'400',color:'white'}}>Total Cases : {details.cases}</Text>
            <Text style={{marginTop:10,fontSize:22,fontWeight:'400',color:'white'}}>Today Cases : {details.todayCases}</Text>
            <Text style={{marginTop:10,fontSize:22,fontWeight:'400',color:'white'}}>Total Death : {details.deaths}</Text>
            <Text style={{marginTop:10,fontSize:22,fontWeight:'400',color:'white'}}>Today Death : {details.todayDeaths}</Text>
            <Text style={{marginTop:10,fontSize:22,fontWeight:'400',color:'white'}}>Total Recovered : {details.recovered}</Text>
            <Text style={{marginTop:10,fontSize:22,fontWeight:'400',color:'white'}}>Today Recovered : {details.todayRecovered}</Text>
            <Text style={{marginTop:10,fontSize:22,fontWeight:'400',color:'white'}}>Total Active : {details.active}</Text>
            <Text style={{marginTop:10,fontSize:22,fontWeight:'400',color:'white'}}>Total Criticals : {details.critical}</Text>
            <Text style={{marginTop:10,fontSize:22,fontWeight:'400',color:'white'}}>Total Tests : {details.tests}</Text>
            <Text style={{marginTop:10,fontSize:22,fontWeight:'400',color:'white'}}>Case Per People : {details.oneCasePerPeople}</Text>
            <Text style={{marginTop:10,fontSize:22,fontWeight:'400',color:'white'}}>Death Per People : {details.oneDeathPerPeople}</Text>
            <Text style={{marginTop:10,fontSize:22,fontWeight:'400',color:'white'}}>Active Per One Million : {details.activePerOneMillion}</Text>
            <Text style={{marginTop:10,fontSize:22,fontWeight:'400',color:'white'}}>Recovered Per Million : {details.recoveredPerOneMillion}</Text>
            <Text style={{marginTop:10,fontSize:22,fontWeight:'400',color:'white'}}>Criticals Per Million : {details.criticalPerOneMillion}</Text>
          </View>
          {/* <View style={{marginTop:30,marginLeft:20,height:650,width:'89%',backgroundColor:'#26B899',borderRadius:25,padding:20}}>
            <Text style={{fontSize:22,fontWeight:'400',color:'white'}}>Short Name : {details.countryInfo.iso3}</Text>
            <Text style={{marginTop:10,fontSize:22,fontWeight:'400',color:'white'}}>Continent : {details.continent}</Text>
            <Text style={{marginTop:10,fontSize:22,fontWeight:'400',color:'white'}}>Total Population : {details.population}</Text>
            <Text style={{marginTop:10,fontSize:22,fontWeight:'400',color:'white'}}>Total Cases : {details.cases}</Text>
            <Text style={{marginTop:10,fontSize:22,fontWeight:'400',color:'white'}}>Today Cases : {details.todayCases}</Text>
            <Text style={{marginTop:10,fontSize:22,fontWeight:'400',color:'white'}}>Total Death : {details.deaths}</Text>
            <Text style={{marginTop:10,fontSize:22,fontWeight:'400',color:'white'}}>Today Death : {details.todayDeaths}</Text>
            <Text style={{marginTop:10,fontSize:22,fontWeight:'400',color:'white'}}>Total Recovered : {details.recovered}</Text>
            <Text style={{marginTop:10,fontSize:22,fontWeight:'400',color:'white'}}>Today Recovered : {details.todayRecovered}</Text>
            <Text style={{marginTop:10,fontSize:22,fontWeight:'400',color:'white'}}>Total Active : {details.active}</Text>
            <Text style={{marginTop:10,fontSize:22,fontWeight:'400',color:'white'}}>Total Criticals : IND</Text>
            <Text style={{marginTop:10,fontSize:22,fontWeight:'400',color:'white'}}>Total Tests : {details.tests}</Text>
            <Text style={{marginTop:10,fontSize:22,fontWeight:'400',color:'white'}}>Case Per People : {details.oneCasePerPeople}</Text>
            <Text style={{marginTop:10,fontSize:22,fontWeight:'400',color:'white'}}>Death Per People : {details.oneDeathPerPeople}</Text>
            <Text style={{marginTop:10,fontSize:22,fontWeight:'400',color:'white'}}>Active Per One Million : {details.activePerOneMillion}</Text>
            <Text style={{marginTop:10,fontSize:22,fontWeight:'400',color:'white'}}>Recovered Per Million : {details.recoveredPerOneMillion}</Text>
            <Text style={{marginTop:10,fontSize:22,fontWeight:'400',color:'white'}}>Criticals Per Million : {details.criticalPerOneMillion}</Text>
          </View> */}
        </ScrollView>
     {/* <ShowDetails /> */}
     <Text></Text>
     <Text></Text>
     <Text></Text>
     
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
  inputBox:{
    borderWidth:1,
    borderColor:'green',
    borderRadius:15,
    width:'80%',
    fontSize:20,
    marginTop:20,
    // position:'absolute',
    left:20,
    padding:20,
  }
})