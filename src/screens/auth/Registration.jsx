import {
    Image,
    Platform,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    ScrollView,
  } from 'react-native';
  import React, {useState, useEffect} from 'react';
  import Feather from 'react-native-vector-icons/Feather';
  import Fontisto from 'react-native-vector-icons/Fontisto';
  import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
  import BouncyCheckbox from 'react-native-bouncy-checkbox';
  

const Registration = ({navigation}) => {
    const [isMediaReporter, setIsMediaReporter] = useState(false);
    const [isVisitor, setIsVisitor] = useState(false);
  
    return (
        <ScrollView>
          <SafeAreaView style={styles.mainContainer}>
            {/* Header Image */}
            <View style={styles.imageView}>
              <Image
                source={require('../../assets/newsLogo.png')}
                resizeMode="contain"
                style={styles.imageStyle}
              />
            </View>
            {/* TextInput box for the User Name */}
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
                placeholder="UserName"
              />
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
                placeholder="Email"
              />
            </View>
            {/* TextInput field for the Phone Number */}
            <View style={styles.inputView}>
              <Feather
                name="smartphone"
                size={24}
                color="gray"
                style={{marginTop: Platform.OS === 'ios' ? 0 : 10}}
              />
              <TextInput
                style={styles.textInputStyle}
                placeholderTextColor="gray"
                placeholder="Phone Number"
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
            {/* Selector Section */}
            <View style={styles.selectorView}>
              <Text style={styles.textColor}>I am a</Text>
              <View style={styles.selectorTextView}>
                <View style={styles.checkbox}>
                  <BouncyCheckbox
                    isChecked={isMediaReporter}
                    onPress={isChecked => setIsMediaReporter(isChecked)}
                  />
                  <Text style={styles.textColor}>Media Reporter</Text>
                </View>
                <View style={styles.checkbox}>
                  <BouncyCheckbox
                    isChecked={isVisitor}
                    onPress={isChecked => setIsVisitor(isChecked)}
                  />
                  <Text style={styles.textColor}>Visitor</Text>
                </View>
              </View>
            </View>
            {/* Button */}
            <TouchableOpacity style={styles.buttonView}>
              <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
            <View style={{width:'80%'}}>
        <TouchableOpacity style={{padding: 10}} onPress={()=> navigation.navigate('Login')}>
          <Text style={[styles.textColor,{textAlign:'center'}]}>Already have an account ?</Text>
        </TouchableOpacity>
        </View>
            {/* or sign in with  */}
            <View style={styles.oRView}>
              <Text style={styles.textColor}>
                ---------- or Sign in with ----------
              </Text>
            </View>
            {/* Socail Login Icons */}
            <View style={styles.iconView}>
              <View style={styles.iconStyle}>
                <Fontisto name="google" size={24} color="gray" />
              </View>
              <View style={styles.iconStyle}>
                <Fontisto name="facebook" size={24} color="gray" />
              </View>
              <View style={styles.iconStyle}>
                <Fontisto name="twitter" size={24} color="gray" />
              </View>
              <View style={styles.iconStyle}>
                <Fontisto name="apple" size={24} color="gray" />
              </View>
            </View>
            {/* Bottom Text */}
            <View style={styles.bottomTextView}>
              <Text style={styles.bottomText}>
                By signing up to News Studios you are accepting our Terms &
                Conditions
              </Text>
            </View>
          </SafeAreaView>
        </ScrollView>
      );
}

export default Registration

const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      alignItems: 'center',
    },
    imageView: {
      marginVertical: 10,
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
    selectorView: {
      width: '80%',
      padding: 10,
      gap: 10,
    },
    selectorTextView: {
      width: '100%',
      alignSelf: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
    },
    checkbox: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 10,
    },
    textColor: {
      fontSize: 18,
      color: 'gray',
    },
    buttonView: {
      backgroundColor: '#1b98ff',
      width: '80%',
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
  
    oRView: {
      width: '80%',
      marginVertical: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    iconView: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      width: '80%',
      marginVertical: 10,
    },
    iconStyle: {
      borderWidth: 2,
      padding: 10,
      width: 50,
      height: 50,
      alignItems: 'center',
    },
    bottomTextView: {
      flex: 1,
      width: '80%',
      justifyContent: 'flex-end',
      marginVertical: 10,
    },
    bottomText: {
      textAlign: 'center',
    },
  });
  