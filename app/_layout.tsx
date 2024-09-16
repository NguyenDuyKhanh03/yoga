import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import 'react-native-reanimated';

import { SafeAreaView } from 'react-native';


export default function RootLayout() {



  return (
    <Stack>
        <Stack.Screen name="(tabs)" options={{headerShown:false}}/>
        <Stack.Screen name="index" options={{headerShown:false}}/>
        <Stack.Screen name="level" options={{headerShown:false}}/>
      </Stack>
  );
}
