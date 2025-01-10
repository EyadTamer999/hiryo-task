import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

interface PostCardProps {
  postId: number;
  avatar: string;
  userName: string;
  title: string;
  content: string;
}

export default function PostCard({
  postId,
  avatar,
  userName,
  title,
  content,
}: PostCardProps) {
  // Navigation
  const navigation = useNavigation();

  return (
    <View className="bg-white shadow-sm rounded-lg p-4 my-4">
      {/* Header with Avatar and User Name */}
      <View className="flex-row items-center mb-4">
        <Image
          source={{
            uri: avatar,
          }}
          className="w-12 h-12 rounded-full mr-4"
        />
        <Text className="text-lg font-semibold text-gray-800">{userName}</Text>
      </View>

      {/* Title */}
      <Text className="text-xl font-bold text-gray-900 mb-2">{title}</Text>

      {/* Content */}
      <Text className="text-gray-700">{content}</Text>

      {/* View Post Button */}
      <View className="flex-row justify-end mt-4">
        <TouchableOpacity
          onPress={() => {
            console.log("View Post");
            navigation.navigate("PostDetail", { postId });
          }}
          className="bg-blue-500 p-2 rounded-lg"
        >
          <Text className="text-blue-500 font-semibold">View Post</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
