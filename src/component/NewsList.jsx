import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
const NewsList = ({NewsData}) => {
  //   console.log(NewsData, 'Line 5');
  const renderItem = ({item}) => {
    return (
      <View style={{borderWidth: 2,backgroundColor:'#fffafa',borderColor:'#fffafa',elevation:5, marginBottom: 15, borderRadius: 10}}>
        <View style={{borderRadius: 10,}}>
          <Image
            source={{uri: item.image}}
            resizeMode="cover"
            style={{height: 300, width: '100%', borderRadius: 10}}
          />
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                padding: 10,
                color: 'black',
                width: '90%',
              }}>
              {item.title}
            </Text>
            <Entypo name="dots-three-vertical" size={24} color="black" />
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View
              style={{
                flexDirection: 'row',
                padding: 10,
                alignSelf: 'center',
                alignItems: 'center',
                gap: 10,
                width: '65%',
                overflow: 'hidden',
              }}>
              <Image
                source={{uri: item.image}}
                resizeMode="cover"
                style={{width: 50, height: 50, borderRadius: 25}}
              />
              <Text style={{fontSize: 16, fontWeight: '600'}}>
                {item?.author}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                padding: 10,
                alignSelf: 'center',
                alignItems: 'center',
                gap: 10,
                width: '35%',
              }}>
              <Text style={{fontSize: 14, fontWeight: '600'}}>{item.date}</Text>
              <Text style={{fontSize: 14, fontWeight: '600'}}>{item.time}</Text>
            </View>
          </View>
          <View style={{padding: 10}}>
            <Text style={{textAlign:'justify',fontSize:16,fontWeight:'500'}}>{item.description}</Text>
          </View>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          width: '90%',
          alignSelf: 'center',
          marginTop: 10,
        }}>
        <FlatList
          data={NewsData}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

export default NewsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
