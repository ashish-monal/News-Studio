import { StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native';
import React, { useState } from 'react';
import Data from '../../assets/data/About.json';

const About = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const handleOpenClose = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const renderItem = ({ item, index }) => {
    const isOpen = openIndex === index;

    return (
      <View>
        <TouchableOpacity
          style={{
            padding: 15,
            borderWidth: 1,
            width: '90%',
            alignSelf: 'center',
            marginVertical: 10,
            borderRadius: 10,
          }}
          onPress={() => handleOpenClose(index)}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black',textAlign:'center' }}>{item.name}</Text>
          {isOpen && (
            <Text style={{ marginVertical: 10, fontSize: 16, fontWeight: '500', color: 'black' }}>
              {item.Desctiption}
            </Text>
          )}
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList data={Data} renderItem={renderItem} keyExtractor={(item) => item.id} />
    </View>
  );
};


export default About

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
