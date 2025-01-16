import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const ProductDetails = () => {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Text>ProductDetails {id}</Text>
    </View>
  )
}

export default ProductDetails;