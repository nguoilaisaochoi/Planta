import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';

const Home = () => {
  const [Data] = useState(data);
  const renderItem = ({item}) => {
    const {id, name, type, price, img} = item;
    return (
      <TouchableOpacity style={styles.bgitem} activeOpacity={0.5}>
        <View style={styles.bgimg}>
          <Image style={{width: '100%', height: 134}} source={img} />
        </View>
        <Text style={styles.txt4}>{name}</Text>
        <Text style={styles.txt5}>{type}</Text>
        <Text style={styles.txt6}>{price} đ</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <View style={{backgroundColor: '#F6F6F6'}}>
        <TouchableOpacity style={styles.cart} activeOpacity={0.5}>
          <Image
            style={{width: 48, height: 46}}
            source={require('../assets/img/cart.png')}
          />
        </TouchableOpacity>
        <Text style={styles.txt1}>Planta - toả sáng không gian nhà bạn</Text>
        <Text style={styles.txt2}>
          Xem hàng mới về
          <Image
            style={{width: 24, height: 24}}
            source={require('../assets/img/right.png')}
          />
        </Text>
        <Image
          style={styles.homebg}
          source={require('../assets/img/homebg.png')}
        />
      </View>

      <View style={{padding: 20}}>
        <Text style={styles.txt3}>Cây trồng </Text>
      </View>
      <View style={styles.FlatList}>
        <FlatList
          data={Data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator={false}
          numColumns={2}
        />
      </View>
    </View>
  );
};

export default Home;
const styles = StyleSheet.create({
  bgimg: {
    width: '100%',
    height: 134,
    backgroundColor: '#F6F6F6',
    borderRadius: 8,
  },
  txt6: {
    // 250.000đ
    color: '#007537',
    fontSize: 16,
    fontFamily: 'Lato Medium',
  },
  txt5: {
    color: '#7D7B7B',
    fontSize: 14,
    fontFamily: 'Lato Medium',
  },
  txt4: {
    marginTop: 5,
    color: '#221F1F',
    fontSize: 16,
    fontFamily: 'Lato Medium',
  },
  FlatList: {
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',
  },
  bgitem: {
    width: 155,
    height: 217,
    margin: 10,
    padding: 5,
  },
  txt3: {
    // Cây trồng
    color: '#221F1F',
    fontSize: 24,
    fontFamily: 'Lato Medium',
  },
  txt2: {
    // Xem hàng mới về
    position: 'absolute',
    zIndex: 1,
    color: '#007537',
    fontSize: 16,
    top: 105,
    left: 20,
    fontFamily: 'Lato Medium',
  },
  txt1: {
    // Planta - toả sáng không gian nhà bạn
    position: 'absolute',
    zIndex: 1,
    top: 41,
    width: 223,
    minHeight: 233,
    color: '#221F1F',
    fontSize: 24,
    fontFamily: 'Lato Medium',
    left: 20,
  },
  homebg: {
    width: '100%',
    height: 250,
    marginTop: 60,
  },
  cart: {
    position: 'absolute',
    top: 40,
    right: 20,
    zIndex: 1,
    width: 48,
    height: 46,
  },
});

var data = [
  {
    id: 1,
    name: 'Spider Plant',
    type: 'Ưa bóng',
    price: '250.000',
    img: require('../assets/img/item.png'),
  },
  {
    id: 2,
    name: 'Spider Plant2',
    type: 'Ưa bóng',
    price: '280.000',
    img: require('../assets/img/item.png'),
  },
];
