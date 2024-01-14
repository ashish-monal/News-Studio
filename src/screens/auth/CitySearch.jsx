import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
  Platform,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import citylist from '../../assets/data/CityList.json';

const RenderItem = React.memo(({ item }) => {
  return (
    <TouchableOpacity style={{ flexDirection: 'row', gap: 10, padding: 10, width: '90%', alignSelf: 'center', marginVertical: 10 }}>
      <FontAwesome name="location-arrow" size={24} color="gray" />
      <Text>{item.name}</Text>
    </TouchableOpacity>
  );
}, (prevProps, nextProps) => {
  return prevProps.item.id === nextProps.item.id;
});

const CitySearch = () => {
  const [data, setData] = useState(citylist);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Filter data based on the search query
    const filteredData = citylist.filter(item =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setData(filteredData);
  }, [searchQuery]);

  const handleSearch = (text) => {
    setSearchQuery(text);
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      {/* Search Box */}
      <View style={styles.inputView}>
        <MaterialIcons
          name="location-city"
          size={24}
          color="gray"
          style={{ marginTop: Platform.OS === 'ios' ? 0 : 10 }}
        />
        <TextInput
          style={styles.textInputStyle}
          placeholderTextColor="gray"
          placeholder="Search City"
          value={searchQuery}
          onChangeText={handleSearch}
        />
      </View>
      <View style={{ width: '100%', flex: 1 }}>
        <FlatList
          data={data}
          renderItem={({ item }) => <RenderItem item={item} />}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

export default CitySearch;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  inputView: {
    flexDirection: 'row',
    width: '90%',
    marginVertical: 20,
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
});
