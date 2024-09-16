import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = ({title,handlePress,textStyles,containerStyles,isLoading,}) => {
  return (
    <TouchableOpacity 
      activeOpacity={0.7}
      onPress={handlePress}
      className={`rounded-xl flex min-h-[48px] justify-center items-center ${containerStyles}
         ${isLoading? "opacity-50":""}
      `}
    >
      <Text className={`text-base ${textStyles}`}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton