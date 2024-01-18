import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons'
const Profile = ({navigation}) => {
  return (
    <SafeAreaView style={{backgroundColor:'white',flex:1}}>
      <StatusBar barStyle={'dark-content'} backgroundColor="white" />
      <View style={styles.maincontainer}>
        <TouchableOpacity style={styles.touchView} onPress={() => navigation.navigate('UserProfile')}>
          <Feather name="user" size={24} color="black" />
          <Text style={styles.text}>Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.touchView} onPress={() => navigation.navigate('UserWallet')}>
          <Ionicons name="wallet-outline" size={24} color="black" />
          <Text style={styles.text}>My Wallet</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.touchView} onPress={() => navigation.navigate('My Post')}>
          <Feather name="edit" size={24} color="black" />
          <Text style={styles.text}>My Post</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.touchView} onPress={() => navigation.navigate('Boost Post')}>
          <Ionicons name="rocket-outline" size={24} color="black" />
          <Text style={styles.text}>Boost your post</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.touchView} onPress={() => navigation.navigate('Notification')}>
          <Ionicons name="notifications-outline" size={24} color="black" />
          <Text style={styles.text}>Notifications</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.touchView} onPress={() => navigation.navigate('TermsandCondition')}>
          <Foundation name="clipboard-notes" size={24} color="black" />
          <Text style={styles.text}>Terms and Conditions</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.touchView} onPress={() => navigation.navigate('About')}>
          <Feather name="info" size={24} color="black" />
          <Text style={styles.text}>About</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.touchView} onPress={() => navigation.navigate('UserWallet')}>
          <Entypo name="stopwatch" size={24} color="black" />
          <Text style={styles.text}>Watch Ads & Earn</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.touchView} onPress={() => navigation.navigate('ReferandEarn')}>
          <Feather name="share" size={24} color="black" />
          <Text style={styles.text}>Refer and Earn</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.touchView} onPress={() => navigation.navigate('UserWallet')}>
          <AntDesign name="logout" size={24} color="black" />
          <Text style={styles.text}>Logout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  maincontainer: {
    padding: 10,
    gap: 10,
  },
  touchView: {
    borderBottomWidth:2,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    padding: 10,
  },
  text: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
  },
});
