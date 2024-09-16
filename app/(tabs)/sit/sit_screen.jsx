import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import images from "../../../constants/images"
import icons from "../../../constants/icons"
import { router } from 'expo-router'
import TaskDay from '../../../components/TaskDay'
import Category from '../../../components/Category'

const SitScreen = () => {
  const data=[
    {
      id:1,
      title:"Day 1",
      subtitle:"9 Exercises",
      time:'04:20 min',
      kcal:'92 Kcal'
    },
    {
      id:2,
      title:"Day 2",
      subtitle:"9 Exercises",
      time:'06:00 min',
      kcal:'102 Kcal'
    },
    {
      id:3,
      title:"Day 3",
      subtitle:"2 Exercises",
      time:'02:20 min',
      kcal:'70 Kcal'
    },
    {
      id:4,
      title:"Day 4",
      subtitle:"13 Exercises",
      time:'06:20 min',
      kcal:'115 Kcal'
    },
    {
      id:5,
      title:"Day 5",
      subtitle:"13 Exercises",
      time:'06:15 min',
      kcal:'110 Kcal'
    },
  ]

  const [selectedButtons,setSelectedButtons] = useState([])
  return (
    <SafeAreaView>
      <View className='flex flex-row justify-between items-center mx-4 mt-[25px]'>
        <TouchableOpacity onPress={() => router.push("/level")}>
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
      
      <View className='flex flex-row mt-4'>
        <Category
          src={images.easyplan}
          name='easy plan'
        />
        <Category
          src={images.hardplan}
          name='Normal plan'
        />
        <Category
          src={images.normalplan}
          name='Hard plan'
        />
        <Category
          src={images.superflexible}
          name='Super flexible'
        />
      </View>
      <View className='mx-4 mt-9 mb-8'>
        <Text className='text-xl font-medium'>Normal plan</Text>
        <View className='flex flex-row justify-between mt-3'>
          <Text className='text-[#747474] text-sm font-normal'>If you never exercise</Text>
          <View className='flex flex-row items-center'>
            <Text className='mr-1 text-[#747474] text-sm font-normal'>Start</Text>
            <TouchableOpacity>
              <Image 
                source={icons.arrow_s_left}
              />
            </TouchableOpacity>
          </View>
        
        </View>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item)=>item.id}
        renderItem={({ item })=>(
          <View className='mx-4 mb-2 '>
            <TaskDay
            title={item.title}
            subtitle={item.subtitle}
            time={item.time}
            kcal={item.kcal}
            handlePress={()=>{
              if(selectedButtons.includes(item.id))
              {
                setSelectedButtons(selectedButtons.filter(i => i !== item.id));
              }
              else{
                setSelectedButtons([...selectedButtons,item.id])
              }
            }}
            handlePressExercises={()=>router.push("/sit/task")}
            buttonStyles={`${selectedButtons.includes(item.id)?'bg-[#455EFF]':''}`}
          />
          </View>
        )}
      />
    </SafeAreaView>
  )
}

export default SitScreen