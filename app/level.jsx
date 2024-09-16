import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import icons from "../constants/icons"
import { router } from 'expo-router'
import CustomButton from "../components/CustomButton";
import CustomTypeLevels from "../components/CustomTypeLevels";
import images from "../constants/images"

const Home = () => {
    const [isClick,setIsClick]=useState(1)
    const data=[
        {
            id:1,
            title:'easy plan',
            content:'Lorem ipsum dolor sit amet consectetur. Id amet orci viverra id.',
            src:images.easyplan_img
        },
        {
            id:2,
            title:'Normal plan',
            content:'Lorem ipsum dolor sit amet consectetur. Id amet orci viverra id.',
            src:images.normalplan_img
        },
        {
            id:3,
            title:'Hard plan',
            content:'Lorem ipsum dolor sit amet consectetur. Id amet orci viverra id.',
            src:images.hardplan_img
        },
        {
            id:4,
            title:'Super flexible',
            content:'Lorem ipsum dolor sit amet consectetur. Id amet orci viverra id.',
            src:images.superflexible_img
        }
    ]
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
        <Text className='mx-4 mt-[20px] text-xs font-semibold'>All type</Text>
        <View className='flex flex-row w-full justify-start items-center mt-4 ml-4  '>
            <CustomButton 
                title='Full body'
                containerStyles={`w-[101px] bg-[#CAE5FF]  mr-4 ${isClick===1?'border-b-4 border-[#455EFF]':''} `}
                handlePress={()=>{
                    setIsClick(1)
                }}
            />
            <CustomButton 
                title='Upper'
                containerStyles={`w-[101px] bg-[#CAE5FF]  mr-4 ${isClick===2?'border-b-4 border-[#455EFF]':''} `}
                handlePress={()=>{
                    setIsClick(2)
                }}
            />
            <CustomButton 
                title='Lower'
                containerStyles={`w-[101px] bg-[#CAE5FF]  mr-4 ${isClick===3?'border-b-4 border-[#455EFF]':''} `}
                handlePress={()=>{
                    setIsClick(3)
                }}
            />
        </View>
        <Text className='mx-4 mt-[20px] text-xs font-semibold mb-1 '>All Levels</Text>
        <FlatList 
            data={data}
            keyExtractor={(item)=>item.id}
            renderItem={({ item })=>(
                <CustomTypeLevels
                    title={item.title}
                    content={item.content}
                    source={item.src}
                    background={images.bg_2}
                    containerStyles={`mb-3 rounded-3xl ${item.id%2==0? 'scale-x-[-1]':''}`}
                    textStyles={item.id%2==0?'scale-x-[-1]':'scale-y-100'}
                />
             
            )}
            ListFooterComponent={()=>(
                <View className='mx-4 '>
                    <CustomButton 
                    title='Lets Started'
                    containerStyles='w-full bg-[#00C19D]'
                    handlePress={()=>router.push("/home")}
                    />
                </View>
            )}
        />
    </SafeAreaView>
  )
}

export default Home