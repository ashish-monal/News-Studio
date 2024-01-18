import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Data from '../../assets/data/MyPost.json'

const MyPost = () => {
  return (
    <ScrollView style={styles.container}>
      {Data.map((post) => (
        <View key={post.id} style={styles.postContainer}>
          <Image source={{ uri: post.image }} style={styles.postImage} />
          <View style={styles.postContent}>
            <Text style={styles.heading}>{post.heading}</Text>
            <Text style={styles.category}>{post.category}</Text>
            <Text style={styles.description}>{post.description}</Text>
            <Text style={styles.videoLink}>{post.videoLink}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  )
}

export default MyPost

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
      },
      postContainer: {
        marginBottom: 16,
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: '#fff',
        elevation: 3,
      },
      postImage: {
        height: 200,
        width: '100%',
        resizeMode: 'cover',
      },
      postContent: {
        padding: 12,
      },
      heading: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
      },
      category: {
        color: '#777',
        marginBottom: 8,
      },
      description: {
        fontSize: 14,
        marginBottom: 8,
      },
      videoLink: {
        color: 'blue',
      },
})