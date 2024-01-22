import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  TextInput,
  Alert,
  Button,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import auth from '@react-native-firebase/auth';
import {GoogleSignin,statusCodes} from '@react-native-google-signin/google-signin';

const Login = ({navigation}) => {
  const [userid, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [userInfo,setUserInfo] = useState(null);

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '884800813280-f2ivsbspfgstq502mttvcd5ui80tu98i.apps.googleusercontent.com',
    });
  }, []);

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const usrInfo = await GoogleSignin.signIn();
      setUserInfo(usrInfo);
      console.log(userInfo, "Line 44");
      navigation.navigate('CitySearch');
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        console.log("Line 47");
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
        console.log("Line 50");
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
        console.log("Line 53");
      } else {
        // some other error happened
        console.log("Line 57", error);  // Log the actual error for further investigation
      }
    }
  };
  
  async function onGoogleButtonPress() {
    // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    // Get the users ID token
    // const {idToken} = await GoogleSignin.signIn();
    // console.log(idToken)
    const usrInfo = await GoogleSignin.signIn();
    console.log(usrInfo);


    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(usrInfo.idToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  }

  const handleSubmit = () => {
    auth()
      .signInWithEmailAndPassword(userid, password)
      .then(response => {
        console.log(response);
        navigation.navigate('CitySearch');
      })
      .catch(error => {
        console.log(error);
        Alert.alert(error.nativeErrorMessage);
      });
  };

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
          value={userid}
          onChangeText={text => setUserId(text)}
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
          value={password}
          onChangeText={text => setPassword(text)}
        />
      </View>
      {/*Forget Password View */}
      <View style={{width: '80%'}}>
        <TouchableOpacity
          style={{padding: 10}}
          onPress={() => navigation.navigate('ForgetPassword')}>
          <Text style={[styles.textColor, {textAlign: 'center'}]}>
            Forget Password ?
          </Text>
        </TouchableOpacity>
      </View>

      {/* Button */}
      <View style={{width: '80%'}}>
        <TouchableOpacity style={styles.buttonView} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>

      {/*Don;t have an account View */}
      <View style={{width: '80%'}}>
        <TouchableOpacity
          style={{padding: 10}}
          onPress={() => navigation.navigate('Registration')}>
          <Text style={[styles.textColor, {textAlign: 'center'}]}>
            Don't have an account ?
          </Text>
        </TouchableOpacity>
        <View style={styles.iconView}>
          <TouchableOpacity
            style={styles.iconStyle}
            onPress={onGoogleButtonPress}>
            <Fontisto name="google" size={24} color="gray" />
          </TouchableOpacity>
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
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  mainContaner: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageView: {
    marginVertical: 10,
    alignItems: 'center',
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
  iconView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '80%',
    marginVertical: 10,
    alignSelf:'center'
  },
  iconStyle: {
    borderWidth: 2,
    padding: 10,
    width: 50,
    height: 50,
    alignItems: 'center',
  },
});
