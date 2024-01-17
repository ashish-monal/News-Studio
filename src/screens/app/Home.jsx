import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Header from '../../component/Header'
import CategoryData from '../../assets/data/NewsCategory.json'
import CategoryLIstData from '../../component/CategoryLIstData'
import NewsData from '../../assets/data/NewsData.json'
import NewsList from '../../component/NewsList'
const Home = ({ route }) => {
  const { selectedCity } = route.params;
  const [category ,setCategory] = useState(CategoryData);
  // console.log(category,"Line 8")
  return (
    <SafeAreaView style={{flex:1}}>
      <Header selectedCity={selectedCity} />
     <CategoryLIstData category={category}/>
     <View style={{flex:1}}> 
     <NewsList NewsData={NewsData}/>
     </View>
   
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({})