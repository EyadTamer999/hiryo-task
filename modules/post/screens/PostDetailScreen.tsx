import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useSelector } from "react-redux";
import { selectPostById } from "../../../slices/postSlice";

interface PostDetailScreenProps {
  navigation: any;
  route: any;
}

export default function PostDetailScreen({
  navigation,
  route,
}: PostDetailScreenProps) {
  const postId = route.params.postId;

  //select the post from the store with the same postId and display it
  // TODO use the post type we created
  const post: any = useSelector(selectPostById(postId));

  // get the comments for the post

  return (
    <SafeAreaView className="bg-white p-4 h-full w-full">
      {/* Post Details */}
      <View className="mb-6">
        <View className="flex-row items-center mb-4">
          {/* User Avatar */}
          <Image
            source={{ uri: "https://example.com/user-avatar.jpg" }}
            className="w-12 h-12 rounded-full mr-4"
          />
          <Text className="text-lg font-semibold">{post.user_id}</Text>
        </View>
        <Text className="text-xl font-bold mb-2">{post.title}</Text>
        <Text className="text-gray-600 mb-4">{post.body}</Text>
      </View>

      {/* Comments Section */}
      <View>
        <Text className="text-xl font-semibold mb-4">Comments</Text>

        <ScrollView
          contentContainerStyle={{ padding: 16 }}
          className="bg-white"
        >
          {/* Comment Card */}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
