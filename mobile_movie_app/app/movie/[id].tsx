import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const Details = () => {
    // to extract the route param, so we can know the details of the movie
    const { id } = useLocalSearchParams()
  return (
    <View>
      <Text>Movie Details: {id}</Text>
    </View>
  )
}

export default Details

const styles = StyleSheet.create({})