import {FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React,{useState} from 'react';

const CategoryLIstData = ({category}) => {
    const [selectedItem, setSelectedItem] = useState('Popular');
  const renderItem = ({item}) => {
    const isSelected = selectedItem === item.name;
    return (
        <TouchableOpacity
        style={[
          styles.itemContainer,
          { backgroundColor: isSelected ? '#1b98ff' : 'white' }, // Change the background color when selected
        ]}
        onPress={() => setSelectedItem(item.name)}
      >
        <Text style={{ fontSize: 16, color: isSelected ? 'white' : 'black' }}>
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.mainconatiner}>
        <View style={{padding:15,alignItems:'center'}}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={category}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
       </View>
    </View>
  );
};

export default CategoryLIstData;

const styles = StyleSheet.create({
    mainconatiner:{
        backgroundColor:'white'
    },
    itemContainer: {
        borderWidth: 1,
        padding: 10,
        marginHorizontal: 10,
        borderRadius: 10,
        overflow: 'hidden', // Make sure the overflow is hidden to properly display the gradient border
      },
      gradientBorder: {
        flex: 1,
        borderRadius: 10,
      },
});
