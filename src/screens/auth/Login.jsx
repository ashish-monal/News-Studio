import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  TextInput,
} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {TouchableOpacity} from 'react-native-gesture-handler';
const Login = ({navigation}) => {
  return (
      <SafeAreaView style={styles.mainContaner}>
        {/* Header Image */}
        <View style={styles.imageView}>
          <Image
            source={require('../../assets/newsLogo.png')}
            resizeMode="contain"
            style={styles.imageStyle}
          />
        </View>
        {/* Login Text */}
        <View style={styles.textView}>
          <Text style={styles.textColor}>Login</Text>
        </View>
        {/* TextInput field for the Email */}
        <View style={styles.inputView}>
          <Feather
            name="user"
            size={24}
            color="gray"
            style={{marginTop: Platform.OS === 'ios' ? 0 : 10}}
          />
          <TextInput
            style={styles.textInputStyle}
            placeholderTextColor="gray"
            placeholder="User Id"
          />
        </View>
        {/* TextInput field for the Password */}
        <View style={styles.inputView}>
          <MaterialIcons
            name="password"
            size={24}
            color="gray"
            style={{marginTop: Platform.OS === 'ios' ? 0 : 10}}
          />
          <TextInput
            style={styles.textInputStyle}
            placeholderTextColor="gray"
            placeholder="Password"
          />
        </View>
        {/*Forget Password View */}
        <View style={{width:'80%'}}>
        <TouchableOpacity style={{padding: 10}} onPress={()=> navigation.navigate('ForgetPassword')}>
          <Text style={[styles.textColor,{textAlign:'center'}]}>Forget Password ?</Text>
        </TouchableOpacity>
        </View>
       
        {/* Button */}
        <View style={{width:'80%'}}>
        <TouchableOpacity style={styles.buttonView}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            </View>

            {/*Don;t have an account View */}
        <View style={{width:'80%'}}>
        <TouchableOpacity style={{padding: 10}} onPress={()=> navigation.navigate('Registration')}>
          <Text style={[styles.textColor,{textAlign:'center'}]}>Don't have an account ?</Text>
        </TouchableOpacity>
        </View>
      </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  mainContaner: {
    flex:1,
    backgroundColor: 'white',
    justifyContent:'center',
    alignItems:'center'
  },
  imageView: {
    marginVertical: 10,
    alignItems:'center'
  },
  imageStyle: {
    height: 150,
    width: 200,
  },
  inputView: {
    flexDirection: 'row',
    width: '80%',
    marginVertical: 10,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderWidth: 2,
    borderColor: 'gray',
    justifyContent: 'center',
  },
  textInputStyle: {
    fontSize: 18,
    marginLeft: 10,
    width: '80%',
    color: 'gray',
  },
  textColor: {
    fontSize: 20,
    color: 'gray',
    fontWeight: '600',
  },
  textView: {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
  buttonView: {
    backgroundColor: '#1b98ff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
  },
});
