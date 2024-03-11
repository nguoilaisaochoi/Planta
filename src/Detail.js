import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const Detail = () => {
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <Text style={styles.txt1}>Spider Plant</Text>
      <Image
        style={styles.img1}
        source={require('../assets/img/backnobg.png')}
      />
      <Image
        style={styles.img2}
        source={require('../assets/img/cartnobg.png')}
      />
      <View style={styles.view1}>
        <Image
          style={styles.img3}
          source={require('../assets/img/rightitem.png')}
        />
        <Image
          style={styles.img4}
          source={require('../assets/img/rightitem.png')}
        />
        <View style={styles.view3}>
          {[...Array(3)].map((a, index) => (
            <View key={index} style={styles.view2}></View>
          ))}
        </View>
        <Image
          style={{width: 337, height: 270, alignSelf: 'center'}}
          source={require('../assets/img/itemdetail.png')}
        />
      </View>
      <View style={{padding: 20, flexDirection: 'row'}}>
        <View style={styles.touch1}>
          <Text style={styles.txt2}>Cây trồng</Text>
        </View>
        <View style={styles.touch1}>
          <Text style={styles.txt2}>Ưa bóng</Text>
        </View>
      </View>
      <Text style={styles.txt3}>250.000đ</Text>
      <View style={styles.view4}>
        <Text style={styles.txt4}>Chi tiết sản phẩm </Text>
      </View>
      <View style={styles.view5}>
        <Text style={styles.txt5}>Kích cỡ </Text>
        <Text style={styles.txt5}>Nhỏ </Text>
      </View>
      <View style={styles.view5}>
        <Text style={styles.txt5}>Xuất xứ </Text>
        <Text style={styles.txt5}>Châu phi </Text>
      </View>
      <View style={styles.view5}>
        <Text style={styles.txt5}>Tình trạng </Text>
        <Text style={[styles.txt5, {color: 'green'}]}>Còn 156 sp </Text>
      </View>

      <View style={[styles.view6, {marginTop: 20}]}>
        <Text>Đã chọn 1 sản phẩm</Text>
        <Text>Tạm tính</Text>
      </View>

      <View style={styles.view6}>
        <View style={styles.view7}>
          <TouchableOpacity activeOpacity={0.6}>
            <Image
              style={{width: 30, height: 30}}
              source={require('../assets/img/giam.png')}
            />
          </TouchableOpacity>
          <Text style={[styles.txt6, {fontSize: 18}]}>1</Text>
          <TouchableOpacity activeOpacity={0.6}>
            <Image
              style={{width: 30, height: 30}}
              source={require('../assets/img/tang.png')}
            />
          </TouchableOpacity>
        </View>
        <Text style={[styles.txt6, {fontSize: 24}]}>250.000d</Text>
      </View>
      <TouchableOpacity style={styles.touch2} activeOpacity={0.7}>
        <Text style={styles.txt7}>Chọn mua</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Detail;
const styles = StyleSheet.create({
  txt7: {
    // Chọn mua
    color: 'white',
    fontSize: 16,
    fontFamily: 'Lato Medium',
    textTransform: 'uppercase',
  },
  touch2: {
    //chọn mua
    backgroundColor: '#007537',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 30,
    marginRight: 30,
    borderRadius: 8,
  },
  txt6: {
    // 1
    color: 'black',
    fontFamily: 'Lato Medium',
  },
  view7: {
    //tăng giảm
    flexDirection: 'row',
    width: 132,
    height: 30,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  view6: {
    //đã chọn 1 sp tạm tính
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 12,
    alignItems: 'center',
  },
  txt5: {
    // Chi tiết sản phẩm
    color: '#3A3A3A',
    fontSize: 16,
    fontFamily: 'Lato Medium',
    paddingBottom: 5,
  },
  view5: {
    //viền thông tin
    marginLeft: 30,
    marginRight: 30,
    borderBottomWidth: 1,
    borderColor: '#ABABAB',
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  txt4: {
    // Chi tiết sản phẩm
    color: '#3A3A3A',
    fontSize: 16,
    fontFamily: 'Lato Black',
    paddingBottom: 5,
  },
  view4: {
    //viền thông tin
    marginLeft: 30,
    marginRight: 30,
    borderBottomWidth: 1,
    borderColor: '#221F1F',
    marginBottom: 15,
  },
  txt3: {
    // 250.000đ
    color: '#007537',
    fontSize: 24,
    marginLeft: 30,
    marginBottom: 10,
    fontFamily: 'Lato Medium',
  },
  txt2: {
    // Cây trồng
    color: 'white',
    fontSize: 14,
    fontFamily: 'Lato Medium',
  },
  touch1: {
    width: 86,
    height: 38,
    padding: 4,
    backgroundColor: '#009245',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  view3: {
    position: 'absolute',
    zIndex: 1,
    bottom: -5,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  view2: {
    //dot
    bottom: 10,
    alignSelf: 'center',
    width: 10,
    height: 10,
    marginTop: 3,
    borderRadius: 5,
    backgroundColor: 'black',
    margin: 3,
  },
  img4: {
    //nút >
    position: 'absolute',
    top: 121,
    right: 20,
    transform: [{rotateY: '180deg'}],
  },
  img3: {
    //nút <
    position: 'absolute',
    top: 121,
    left: 20,
  },
  view1: {
    position: 'relative',
    height: 268,
    backgroundColor: '#F6F6F6',
  },
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
    width: 26,
    height: 26,
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
