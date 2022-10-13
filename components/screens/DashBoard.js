import { RefreshControl,StatusBar, StyleSheet, Text, View,Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useLayoutEffect, useState,useCallback } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Foundation from 'react-native-vector-icons/Foundation'
import BottomTabs from './BottomTabs'

const DashBoard = () => {
    return(
    <>
        <BottomTabs />
    </>
  )
}

export default DashBoard

const styles = StyleSheet.create({})