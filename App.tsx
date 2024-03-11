import { View, Text, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import Login from './src/Login'
import Reg from './src/Reg';
import Main from './src/Main';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar translucent backgroundColor={'rgba(0,0,0,0)'} />
      <View style={{flex: 1}}>
        <Main />
      </View>
    </SafeAreaView>
  );
}

export default App