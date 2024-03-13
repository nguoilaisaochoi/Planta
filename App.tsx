import {View, Text, SafeAreaView, StatusBar} from 'react-native';
import React from 'react';
import Login from './src/Login';
import Reg from './src/Reg';
import Main from './src/Main';
import Detail from './src/Detail';
import AppNavigation from './src/AppNavigation';
import {Appprovider} from './src/Appcontext';


const App = () => {
  return (
    <Appprovider>
      <SafeAreaView style={{flex: 1}}>
        <StatusBar translucent backgroundColor={'rgba(0,0,0,0)'} />
        <View style={{flex: 1}}>
          <AppNavigation />
        </View>
      </SafeAreaView>
    </Appprovider>
  );
};

export default App;
