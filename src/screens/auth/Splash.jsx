import { Image, StyleSheet, Text, View } from 'react-native'
import React,{useEffect} from 'react'


const Splash = ({navigation}) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.replace('Login')
    },2000)
    return () => clearTimeout(timeout)
  })
  return (
    <View style={styles.mainContainer}>
        <Image source={require('../../assets/newsLogo.png')} resizeMode='cover' style={styles.imageStyle} />
        <Text style={styles.textStyle}>All type of news from trusted source for all type of the people.</Text>
    </View>
)

}

export default Splash

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
},
imageStyle: {
    height: 200,
    width: 200,
},
textStyle: {
    width: '80%',
    textAlign: 'center',
    fontSize: 18,
    color: '#949494'
  }
})