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

const Reg = () => {
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
          <Text style={styles.txtwelcome}>Đăng kí</Text>
          <Text style={styles.txtdn}>Tạo tài khoản</Text>
          <View style={styles.inputpass}>
            <TextInput style={{width: '90%'}} placeholder="Họ tên" />
          </View>
          <View style={styles.inputpass}>
            <TextInput style={{width: '90%'}} placeholder="Email" />
          </View>
          <View style={styles.inputpass}>
            <TextInput style={{width: '90%'}} placeholder="Số điẹn thoại" />
          </View>
          <View style={styles.inputpass}>
            <TextInput style={{width: '80%'}} placeholder="Mật khẩu" />
            <Image
              style={{width: 29, height: 24}}
              source={require('../assets/img/eye_off.png')}
            />
          </View>
          <Text style={styles.txtagre}>
            Để đăng ký tài khoản, bạn đồng ý{' '}
            <Text style={{color: '#009245', textDecorationLine: 'underline'}}>
              Terms & Conditions
            </Text>{' '}
            and{' '}
            <Text style={{color: '#009245', textDecorationLine: 'underline'}}>
              Privacy Policy
            </Text>
          </Text>
          <TouchableOpacity activeOpacity={0.8}>
            <LinearGradient
              colors={['#007537', '#4CAF50']}
              style={styles.btn}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 1}}>
              <Text style={styles.btndn}>Đăng kí</Text>
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
            <Text style={styles.or}>Hoặc</Text>
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
            Tôi đã có tài khoản{' '}
            <Text style={[styles.txtdk, {color: '#009245'}]}>Đăng nhập</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Reg;

const styles = StyleSheet.create({
  txtagre: {
    color: 'black',
    alignSelf: 'center',
    textAlign: 'center',
    fontFamily: 'DesignerVN-Poppins-Regular',
  },
  or: {
    marginLeft: 10,
    marginRight: 10,
    color: 'black',
    fontFamily: 'DesignerVN-Poppins-Regular',
  },
  txtdk: {
    // Tạo tài khoán
    marginTop: 29,
    fontFamily: 'DesignerVN-Poppins-Regular',
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
    fontFamily: 'DesignerVN-Poppins-ExtraBold',
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
    fontFamily: 'DesignerVN-Poppins-Regular',
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
    fontFamily: 'DesignerVN-Poppins-ExtraBold',
    alignSelf: 'center',
    marginTop: -30,
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
    marginTop: -300,
    resizeMode: 'contain',
    width: 482,
    height: 487,
  },
});
