import {StyleSheet, Text, View, Image,TouchableOpacity} from 'react-native';
import React from 'react';
import { Button } from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const ReferAndEarn = () => {
  return (
    <View style={styles.maincontainer}>
      <View style={{marginTop: 10}}>
        <Image
          source={require('../../assets/refer.jpg')}
          resizeMode="contain"
          style={{height: 200, width: '100%'}}
        />
      </View>
      <View style={styles.iconholder}>
        <TouchableOpacity>
        <AntDesign name="facebook-square" size={45} color="blue" />
        </TouchableOpacity>
        <TouchableOpacity>
        <AntDesign name="instagram" size={45} color="red" />
        </TouchableOpacity>
        <TouchableOpacity>
        <AntDesign name="message1" size={45} color="red" />
        </TouchableOpacity>
        <TouchableOpacity>
        <FontAwesome name="whatsapp" size={45} color="green" />
        </TouchableOpacity>
      </View>
      <View style={styles.inputholder}>
          <Button
            mode="contained"
            style={styles.button}>
            <Text style={styles.buttonText}>Refer</Text>
          </Button>
        </View>
    </View>
  );
}

export default ReferAndEarn

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white'
  },
  maincontainer: {
    height: '100%',
    backgroundColor: 'white',
  },
  iconholder: {
    marginTop:25,

    flexDirection: 'row',
    justifyContent: 'space-around',
    // alignItems: 'center',
    // alignSelf: 'center',
  },
  inputholder: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 25,
    position:'absolute',
    bottom:0
  },
  buttonText: {
    fontSize: 18,
    width: '100%',
  },
  button: {
    width: '90%',
    height: 50,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
})