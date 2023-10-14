import { SafeAreaView,StyleSheet, Text, View, StatusBar } from 'react-native'
import React from 'react'

const Top = () => {
  return (
    <SafeAreaView> 
        <StatusBar backgroundColor="#73C6B6"></StatusBar>

    
    </SafeAreaView>
  )
}

export default Top

const styles = StyleSheet.create({
    container: {
     flex: 1,
     backgroundColor: '#fff',
    },
    content: {
     padding :40,
     
    },
    list: {
   
   marginTop: 20,
    },
   });