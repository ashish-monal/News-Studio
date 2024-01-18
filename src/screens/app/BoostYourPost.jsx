import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, FlatList } from 'react-native';
import postsData from '../../assets/data/MyPost.json';

const BoostYourPost = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [selectedDays, setSelectedDays] = useState(1); // Default to 1 day

  const handleSearch = () => {
    const query = searchQuery.toLowerCase();
    const result = postsData.filter((post) => post.category.toLowerCase().includes(query));

    if (result.length > 0) {
      setFilteredPosts(result);
      setSelectedPost(null); // Reset selected post when performing a new search
    } else {
      Alert.alert('Posts not found', 'No posts match the entered category.');
    }
  };

  const handleBoost = () => {
    if (selectedPost) {
      const totalAmount = selectedDays * 10; // Assuming Rs 10 per day
      Alert.alert(
        'Boost Your Post',
        `To boost your post "${selectedPost.heading}" for ${selectedDays} days, the total amount is Rs ${totalAmount}.`,
      );
      // You can implement payment logic here
    } else {
      Alert.alert('Select a post', 'Please select a post before boosting.');
    }
  };

  const renderPostItem = ({ item }) => (
    <TouchableOpacity style={styles.postItem} onPress={() => setSelectedPost(item)}>
      <Text style={styles.postItemText}>{item.category}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search by category"
        value={searchQuery}
        onChangeText={(text) => setSearchQuery(text)}
      />
      <TouchableOpacity style={styles.button} onPress={handleSearch}>
        <Text style={styles.buttonText}>Search</Text>
      </TouchableOpacity>

      <FlatList
        data={filteredPosts}
        renderItem={renderPostItem}
        keyExtractor={(item) => item.id.toString()}
        style={styles.postList}
      />

      {selectedPost && (
        <View style={styles.postDetails}>
          <Text style={styles.heading}>{selectedPost.heading}</Text>
          <Text style={styles.boostInfo}>{`Boosting cost: Rs 10 per day`}</Text>
          <Text style={styles.boostInfo}>{`Selected days: ${selectedDays}`}</Text>
          <Text style={styles.totalAmount}>{`Total Amount: Rs ${selectedDays * 10}`}</Text>

          <TextInput
            style={styles.input}
            placeholder="Enter days for boosting"
            keyboardType="numeric"
            value={selectedDays.toString()}
            onChangeText={(text) => setSelectedDays(parseInt(text) || 0)}
          />
          <TouchableOpacity style={styles.boostButton} onPress={handleBoost}>
            <Text style={styles.buttonText}>Boost Post</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default BoostYourPost;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#3498db',
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 16,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  postList: {
    marginBottom: 16,
  },
  postItem: {
    backgroundColor: '#ecf0f1',
    padding: 10,
    borderRadius: 5,
    marginBottom: 8,
  },
  postItemText: {
    fontSize: 16,
    color: '#2c3e50',
  },
  postDetails: {
    borderWidth: 1,
    padding: 16,
    borderRadius: 10,
    backgroundColor: '#ecf0f1',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#2c3e50',
  },
  boostInfo: {
    marginBottom: 8,
    color: '#34495e',
  },
  totalAmount: {
    marginTop: 8,
    fontWeight: 'bold',
    color: '#e74c3c',
  },
  boostButton: {
    backgroundColor: '#2ecc71',
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 16,
  },
});
