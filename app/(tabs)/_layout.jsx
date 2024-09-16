import { View, Text, Image } from 'react-native'
import React from 'react'
import { Stack, Tabs } from 'expo-router'
import icons from "../../constants/icons"

const TabIcon=({icon, name, color, focused})=>{
    return(
        <View className='flex items-center justify-center  gap-2'>
            <Image
                source={icon} 
                tintColor={color}
                className='w-6 h-6'
                resizeMode='contain'
            />
            {/* <Text className={`text-xs ${color}`}>{name}</Text> */}
        </View>
    )
}


const TabsLayout = () => {
  return (
    <>
        <Tabs
            screenOptions={{
                tabBarActiveTintColor:'#00C19D',
                tabBarInactiveTintColor:'#D1D1D1',
                tabBarShowLabel:false,
                tabBarStyle:{
                    backgroundColor:'#FFFFFF',
                    shadowColor:'#00C19D',
                    shadowOffset: { width: 0, height: -3 }, 
                    shadowOpacity: 0.09, 
                    shadowRadius: 13,
                    elevation:5,
                    height:69
                }
            }}
        >
            <Tabs.Screen
                name='home'
                options={{
                    title: "Home",
                    headerShown:false,
                    tabBarIcon:({color,focus})=>(
                        <TabIcon
                            color={color}
                            icon={icons.home}
                            name="Home"
                            focused={focus}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name='sit'
                options={{
                    title: "Sit",
                    headerShown:false,
                    tabBarIcon:({color,focus})=>(
                        <TabIcon
                            color={color}
                            icon={icons.sit}
                            name="Sit"
                            focused={focus}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name='chart'
                options={{
                    title: "Chart",
                    headerShown:false,
                    tabBarIcon:({color,focus})=>(
                        <TabIcon
                            color={color}
                            icon={icons.chart}
                            name="Chart"
                            focused={focus}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name='user'
                options={{
                    title: "User",
                    headerShown:false,
                    tabBarIcon:({color,focus})=>(
                        <TabIcon
                            color={color}
                            icon={icons.user}
                            name="User"
                            focused={focus}
                        />
                    ),
                }}
            />
        </Tabs>
    </>
  )
}

export default TabsLayout