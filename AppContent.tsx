import React from "react";

import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider } from "react-native-safe-area-context";

// Screens import
import { HomeScreen } from "./modules/home/App";
import { PostDetailScreen } from "./modules/post/App";

const Stack = createStackNavigator();

export default function AppContent() {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <StatusBar hidden />
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="PostDetail" component={PostDetailScreen} />
        </Stack.Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}