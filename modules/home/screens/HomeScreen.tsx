import React from "react";
import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button title="Go to Post Detail" />
    </View>
  );
}
