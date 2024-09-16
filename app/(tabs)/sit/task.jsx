import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import icons from '../../../constants/icons'
import { router } from 'expo-router'
import Category from '../../../components/Category'
import images from "../../../constants/images"
const TaskScreen = () => {
  return (
    <SafeAreaView>
      <View className='flex flex-row justify-between items-center mx-4 mt-[25px]'>
        <TouchableOpacity onPress={() => router.back()}>    
          <Image
            source={icons.arrow}
            className='w-[20px]'
            resizeMode='contain'
          />
        </TouchableOpacity>
        <Image
          source={icons.more}
          className='w-[20px]'
          resizeMode='contain'
        />
      </View>
      <View className='w-full h-[265px] relative'>
        <Image
          className='mx-2'
          source={images.mask}
          resizeMode='contain'

        />
        <Image
          source={images.cobra_pose}
          className='w-[210px] h-[210px] absolute top-5 right-32'
          resizeMode='contain'
        />
      </View>
      <Text className='justify-center mx-auto text-3xl mt-4'>Upward Dog Yoga</Text>
      <View className='justify-center flex flex-row gap-3 mt-1'>
        <Image
          source={icons.health}
          resizeMode='contain'
        />
        <Image
          source={icons.volume}
          resizeMode='contain'
        />
      </View>
      <View className='mx-auto mt-5 relative'>
        <Image
          source={images.round}
          resizeMode='contain'
        />
        <Text className='absolute top-20 left-16 text-[42px] font-normal'>8 / 12</Text>
      </View>
      <View className='flex flex-row justify-around mt-4 items-center'>
        <TouchableOpacity className='h-12 w-[125px] justify-center items-center border-2 rounded-xl border-[#455EFF]'>
          <Text className='text-[#455EFF] text-xl font-medium'>Prev</Text>
        </TouchableOpacity>
        
        <TouchableOpacity>
          <Image
            source={icons.arrow_s_left}
            className='w-[40px] h-[40px]'
            resizeMode='contain'
          />
        </TouchableOpacity>
        <TouchableOpacity className='h-12 w-[125px] justify-center items-center border-2 rounded-xl border-white bg-[#455EFF]'>
          <Text className='text-white text-xl font-medium'>Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default TaskScreen