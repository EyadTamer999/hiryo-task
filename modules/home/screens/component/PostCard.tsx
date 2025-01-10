import React, { Component } from "react";
import { Text, View, Image } from "react-native";

interface PostCardProps {
  avatar: string;
  userName: string;
  title: string;
  content: string;
}

export default class PostCard extends Component<PostCardProps> {
  render() {
    const { avatar, userName, title, content } = this.props;

    return (
      <View className="bg-white shadow-md rounded-lg p-4 my-4">
        {/* Header with Avatar and User Name */}
        <View className="flex-row items-center mb-4">
          <Image
            source={{
              uri: avatar,
            }}
            className="w-12 h-12 rounded-full mr-4"
          />
          <Text className="text-lg font-semibold text-gray-800">
            {userName}
          </Text>
        </View>

        {/* Title */}
        <Text className="text-xl font-bold text-gray-900 mb-2">{title}</Text>

        {/* Content */}
        <Text className="text-gray-700">{content}</Text>
      </View>
    );
  }
}
