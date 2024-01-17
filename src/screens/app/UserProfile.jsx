import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const UserProfile = () => {
  return (
    <SafeAreaView style={styles.conatiner}>
      <View style={{justifyContent: 'center'}}>
        <View style={{marginTop: 50, alignItems: 'center'}}>
          <FontAwesome name="user-circle-o" size={150} color="black" />
        </View>
        <View style={styles.detailsHolder}>
          <View style={styles.infoHolder}>
            <Text style={styles.text}>Name: Ashish Ranjan</Text>
          </View>

          <View style={styles.infoHolder}>
            <Text style={styles.text}>Email: aviashishranjan@gmail.com</Text>
          </View>

          <View style={styles.infoHolder}>
            <Text style={styles.text}>Phone No: 6206416452</Text>
          </View>

          <View style={styles.infoHolder}>
            <Text style={styles.text}>Coin: 599</Text>
          </View>

          <View style={styles.infoHolder}>
            <Text style={styles.text}>City: Patna</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: 'white',
  },
  detailsHolder: {
    padding: 10,
    gap: 15,
    width: '90%',
    alignSelf: 'center',
    marginTop: 40,
  },
  infoHolder: {
    borderBottomWidth: 2,
    padding: 10,
    alignItems: 'center',
    marginVertical: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
