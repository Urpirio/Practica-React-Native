import React from 'react';
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
        <Stack.Screen name='index' options={{ title: 'Home'}}/>
        <Stack.Screen name='Pages2' options={{ title: 'Pages2'}}/>
    </Stack>
  )
}
