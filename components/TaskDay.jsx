import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import icons from '../constants/icons'
import { Link } from 'expo-router'

const TaskDay = ({title, subtitle, time, kcal, handlePress, handlePressExercises,buttonStyles,href}) => {
  return (
    <View className='h-[77px]  flex flex-row'>
      <TouchableOpacity 
        onPress={handlePress}
        activeOpacity={1}
        className={`bg-[#CAE5FF] rounded-[10px] w-[77px] items-center justify-center  mr-1 ${buttonStyles}`}>
        <Image
            source={icons.tick}
            resizeMode='contain'
            className='w-[29px] h-[17px]'
        />
      </TouchableOpacity>
      <View className='flex flex-col gap-2 flex-1 justify-evenly'>
        <View className='flex flex-row justify-between items-center p-1'>
            <Text className='text-xl font-medium text-black'>{title}</Text>
            <TouchableOpacity onPress={handlePressExercises}>
                <Image
                  source={icons.arow_left}
                  className='w-[19px] h-[12px]'
                  resizeMode='contain'
                />
            </TouchableOpacity>
        </View>
        <View className='flex flex-row justify-around items-center'>
            <Text className='text-[#747474] text-xs font-normal'>{subtitle}</Text>
            <Text className='text-[#747474] text-xs font-normal'>{time}</Text>
            <Text className='text-[#747474] text-xs font-normal'>{kcal}</Text>
        </View>
      </View>
    </View>
  )
}

export default TaskDay