import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const SitStack = () => {
  return (
    <Stack>
        <Stack.Screen name="sit_screen" options={{ headerShown: false }} />  
        <Stack.Screen name="task" options={{ headerShown: false }} />  
    </Stack>
  )
}

export default SitStack