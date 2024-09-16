import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Category = ({src,name}) => {
  return (
    <View className='flex flex-col w-[86px] justify-center items-center gap-y-2'>
        <TouchableOpacity className='border-solid border-b-[3px] border-[#171717] rounded-[10px]'>
            <Image
                source={src}
                className='w-[62px] h-[74px] '
                resizeMode='contain'
            />
        </TouchableOpacity>

        <Text className='text-sm font-normal text-black'>{name}</Text>
    </View>
  )
}

export default Category