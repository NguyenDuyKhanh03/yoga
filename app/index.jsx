import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import images from "../constants/images"
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomButton from "../components/CustomButton";
import { router } from 'expo-router';

const Welcome = () => {
  return (
    <SafeAreaView className='w-full h-full'>
      <ScrollView contentContainerStyle={{
          height: "100%",
      }}>
        <Image 
            source={images.meditation}
            className="w-full h-[430px]"
              resizeMode="contain"
        />

        <View className='"w-full mx-8 mt-6'>
          <Text className="text-4xl font-semibold">Feel stronger</Text>
          <Text className="text-xl font-normal mt-[10px]">learn from the world’s best yoga couchers anytime at home or on the go.</Text>
          
        </View>
        <View className='"w-full h-full mx-3 mt-[72px]'>
          <CustomButton 
            title='Get Started'
            containerStyles='w-full bg-[#00C19D]'
            handlePress={()=>router.push("/level")}
          />
          </View>
        
      </ScrollView>
      
      
    </SafeAreaView>
  )
}

export default Welcome