import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Header = ({txt, img}) => {
  const navigation = useNavigation();
  return (
    <View>
      <Text style={styles.txt1}>{txt}</Text>
      <TouchableOpacity
        style={styles.img1}
        onPress={() => navigation.goBack()}
        activeOpacity={0.5}>
        <Image
          style={{width: 28, height: 28}}
          source={require('../assets/img/backnobg.png')}
        />
      </TouchableOpacity>
      {!!img && (
        <TouchableOpacity style={styles.img2} activeOpacity={0.5}>
          <Image style={{width: 26, height: 26}} source={img} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Header;
const styles = StyleSheet.create({
  txt1: {
    // Spider Plant
    alignSelf: 'center',
    color: '#221F1F',
    fontSize: 18,
    fontFamily: 'Lato Medium',
    marginTop: 30,
    paddingBottom: 17,
  },
  img1: {
    //back
    position: 'absolute',
    top: 30,
    left: 20,
    width: 28,
    height: 28,
  },
  img2: {
    //cart
    position: 'absolute',
    right: 20,
    top: 30,
    width: 26,
    height: 26,
  },
});
