import React from "react";
import { View, Text, Image } from "react-native";

interface CommentCardProps {
  avatarUrl: string;
  userName: string;
  content: string;
}

export default function CommentCard({
  avatarUrl,
  userName,
  content,
}: CommentCardProps) {
  return (
    <View className="bg-gray-100 p-4 rounded-lg mb-4 h-full">
      <View className="flex-row items-center mb-2">
        {/* User Avatar */}
        <Image
          source={{ uri: avatarUrl }}
          className="w-8 h-8 rounded-full mr-3"
        />
        <Text className="text-lg font-semibold">{userName}</Text>
      </View>
      <Text className="text-gray-700">{content}</Text>
    </View>
  );
}
