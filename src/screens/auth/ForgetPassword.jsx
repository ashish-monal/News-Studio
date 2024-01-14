import { StyleSheet, Text, View,Image,TextInput,TouchableOpacity,SafeAreaView } from 'react-native'
import React from 'react';
import Fontisto from 'react-native-vector-icons/Fontisto';

const ForgetPassword = () => {
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
          <Text style={styles.textColor}>Forget Password</Text>
        </View>
        {/* TextInput field for the Email */}
        <View style={styles.inputView}>
        <Fontisto
                name="email"
            size={24}
            color="gray"
            style={{marginTop: Platform.OS === 'ios' ? 0 : 10}}
          />
          <TextInput
            style={styles.textInputStyle}
            placeholderTextColor="gray"
            placeholder="Enter Email id"
          />
        </View>
        <View style={{width:'80%'}}>
        <TouchableOpacity style={styles.buttonView}>
              <Text style={styles.buttonText}>Forget password</Text>
            </TouchableOpacity>
            </View>
        </SafeAreaView>
  )
}

export default ForgetPassword

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
})