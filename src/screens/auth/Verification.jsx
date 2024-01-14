import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Feather from 'react-native-vector-icons/Feather';
const Verification = ({navigation}) => {
  const [timer, setTimer] = useState(30);
  const [timerActive, setTimerActive] = useState(true);
  useEffect(() => {
    let interval;

    if (timerActive) {
      interval = setInterval(() => {
        setTimer(prevTimer => {
          if (prevTimer === 1) {
            setTimerActive(false);
            clearInterval(interval);
            return 30; // Reset timer to 30 seconds
          } else {
            return prevTimer - 1;
          }
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [timerActive]);

  const startTimer = () => {
    setTimerActive(true);
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
        <Text style={styles.textColor}>Verify Email and Phone Number</Text>
      </View>
      {/* TextInput field for the Email */}
      <View style={styles.inputView}>
        <Feather
          name="lock"
          size={24}
          color="gray"
          style={{marginTop: Platform.OS === 'ios' ? 0 : 10}}
        />
        <TextInput
          style={styles.textInputStyle}
          placeholderTextColor="gray"
          placeholder="Email OTP"
        />
      </View>
      {/* TextInput field for the Phone No */}
      <View style={styles.inputView}>
        <Feather
          name="lock"
          size={24}
          color="gray"
          style={{marginTop: Platform.OS === 'ios' ? 0 : 10}}
        />
        <TextInput
          style={styles.textInputStyle}
          placeholderTextColor="gray"
          placeholder="Mobile OTP"
        />
      </View>
      {timerActive ? (
        <Text style={{textAlign: 'center', fontSize: 18, color: 'gray'}}>
          Resend OTP in {timer} seconds
        </Text>
      ) : (
        <View style={{width: '80%'}}>
        <TouchableOpacity style={styles.buttonView} onPress={startTimer}>
          <Text style={styles.buttonText}>Resend OTP</Text>
        </TouchableOpacity>
        </View>
      )}
      <View style={{width: '80%'}}>
        <TouchableOpacity style={styles.buttonView} onPress={() => navigation.navigate('CitySearch')}>
          <Text style={styles.buttonText}>Verify</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Verification;

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
});
