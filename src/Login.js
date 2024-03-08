import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const Login = () => {
  return (
    <View>
      <Image
        style={styles.logo}
        source={require('../assets/img/Ellipse.png')}
      />
      <TouchableOpacity style={styles.back} activeOpacity={0.8}>
        <Image
          style={{borderRadius: 99}}
          source={require('../assets/img/back.png')}
        />
      </TouchableOpacity>
      <View>
        <View style={{paddingLeft: 30, paddingRight: 30}}>
          <Text style={styles.txtwelcome}>Chào mừng bạn</Text>
          <Text style={styles.txtdn}>Đăng nhập tài khoản</Text>
          <View style={styles.inputpass}>
            <TextInput
              style={{width: '90%'}}
              placeholder="Nhập email hoặc số điện thoại"
            />
          </View>
          <View style={styles.inputpass}>
            <TextInput style={{width: '80%'}} placeholder="Mật khẩu" />
            <Image
              style={{width: 29, height: 24}}
              source={require('../assets/img/eye_off.png')}
            />
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{width: 22, height: 22}}
                source={require('../assets/img/check.png')}
              />
              <Text style={[styles.txtrem, {color: '#949090'}]}>
                Ghi nhớ tài khoản
              </Text>
            </View>
            <Text style={[styles.txtrem, {color: '#009245'}]}>
              Forgot Password ?
            </Text>
          </View>
          <TouchableOpacity activeOpacity={0.8}>
            <LinearGradient
              colors={['#007537', '#4CAF50']}
              style={styles.btn}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 1}}>
              <Text style={styles.btndn}>Đăng nhập</Text>
            </LinearGradient>
          </TouchableOpacity>
          <View style={styles.lineor}>
            <LinearGradient
              style={styles.line}
              colors={['#007537', '#4CAF50']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 1}}>
              <Text></Text>
            </LinearGradient>
            <Text style={{marginLeft: 10, marginRight: 10}}>Hoặc</Text>
            <LinearGradient
              style={styles.line}
              colors={['#007537', '#4CAF50']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 1}}>
              <Text></Text>
            </LinearGradient>
          </View>
          <View style={styles.morelogin}>
            <Image
              style={{width: 32, height: 32}}
              source={require('../assets/img/gg.png')}
            />
            <Image
              style={{width: 32, height: 32}}
              source={require('../assets/img/fb.png')}
            />
          </View>
          <Text style={[styles.txtdk, {color: 'black'}]}>
            Bạn không có tài khoản
            <Text style={[styles.txtdk, {color: '#009245'}]}>
              Tạo tài khoản
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  txtdk: {
    // Tạo tài khoán
    marginTop: 29,
    fontFamily: 'Poppins',
    fontWeight: '500',
    alignSelf: 'center',
  },
  morelogin: {
    alignSelf: 'center',
    width: '60%',
    flexDirection: 'row',
    marginTop: 35,
    justifyContent: 'space-around',
  },
  btndn: {
    // Đăng nhập
    color: 'white',
    fontSize: 20,
    fontFamily: 'Poppins',
    fontWeight: '700',
  },
  btn: {
    width: '100%',
    height: 50,
    marginTop: 24,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 21,
  },
  txtrem: {
    fontFamily: 'Poppins',
    fontWeight: '500',
  },
  inputpass: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#8B8B8B',
    borderRadius: 10,
    paddingLeft: 14,
    paddingRight: 14,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#8B8B8B',
    padding: 14,
    borderRadius: 10,
  },
  txtdn: {
    // Đăng nhập tài khoản
    color: 'black',
    fontSize: 18,
    fontFamily: 'Poppins',
    fontWeight: '400',
    alignSelf: 'center',
    marginBottom: 20,
  },
  back: {
    margin: 25,
    position: 'absolute',
    zIndex: 1,
    width: 32,
    height: 32,
  },
  txtwelcome: {
    // Chào mừng bạn
    color: 'black',
    fontSize: 30,
    fontFamily: 'Poppins',
    fontWeight: '700',
    alignSelf: 'center',
  },
  lineor: {
    width: '100%',
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
  },
  line: {
    width: 130,
    height: 2,
  },
  logo: {
    marginTop: -200,
    resizeMode: 'contain',
    width: 482,
    height: 487,
  },
});
