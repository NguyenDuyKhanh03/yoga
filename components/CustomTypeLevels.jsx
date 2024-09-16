import { View, Text, Image, ImageBackground } from 'react-native'
import React from 'react'

const CustomTypeLevels = ({title,content,source,containerStyles,background,textStyles}) => {
  return (
    <ImageBackground className={`h-[121px] rounded-xl ${containerStyles} transform`}
        resizeMode='cover'
        source={background}
    >
        <View className={`flex flex-row h-full justify-between items-center `}>
            <View className={`ml-4 ${textStyles}`}>
                <Text className='text-sm font-normal ml-4 '>{title}</Text>
                <Text className='text-sm font-light w-[139px] ml-4 mt-1'>{content}</Text>
            </View>
            <Image
                source={source}
                className='mb-1 h-full w-[200px]'
                resizeMode='contain'
            />
        </View>
    </ImageBackground>
  )
}

export default CustomTypeLevels