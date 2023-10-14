/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import AddExpense from './screens/AddExpense';
import Home from './screens/Home';
import Top from './screens/Top';


const App = () => {


  return (
    <SafeAreaView  style={{ flex: 1 }}>
      {/* style={{backgroundColor:'#EBF5FB', flex:1}}> */}
      <ImageBackground
      source={require('./drawables/expense.jpg')} 
      resizeMode="cover" style={styles.image}>    
        <Top></Top>
        {/* <Home></Home> */}
        <AddExpense></AddExpense>
      </ImageBackground>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    },
});

export default App;

