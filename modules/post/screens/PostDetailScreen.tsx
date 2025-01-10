import React, { useEffect, useState } from "react";
import { View, Text, Image, ScrollView, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useSelector, useDispatch } from "react-redux";
import { selectPostById } from "../../../slices/postSlice";
import { getComments } from "../../../services/api";

import CommentCard from "../component/CommentCard";

interface PostDetailScreenProps {
  navigation: any;
  route: any;
}

export default function PostDetailScreen({
  navigation,
  route,
}: PostDetailScreenProps) {
  const dispatch = useDispatch();
  const postId = route.params.postId;

  // Select the post from the store with the same postId and display it
  const post: any = useSelector(selectPostById(postId));

  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  // Get the comments for the post
  useEffect(() => {
    getComments(postId)
      .then((data) => {
        setComments(data);
        setLoading(false); // Set loading to false once the data is fetched
      })
      .catch((error) => {
        console.error("Error fetching comments:", error);
        setLoading(false); // Set loading to false even in case of an error
      });
  }, [dispatch, postId]);

  return (
    <SafeAreaView className="bg-white p-4 h-full w-full">
      {/* Post Details */}
      <View className="mb-6">
        <View className="flex-row items-center mb-4">
          {/* User Avatar */}
          <Image
            source={{ uri: "https://thispersondoesnotexist.com/" }}
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
          className="bg-white h-full"
        >
          {/* Show loading indicator while comments are being fetched */}
          {loading ? (
            <ActivityIndicator size="large" color="#000000" />
          ) : (
            // Comment Cards
            comments.map((comment: any) => (
              <CommentCard
                key={comment.id}
                avatarUrl="https://thispersondoesnotexist.com/"
                userName={comment.email}
                content={comment.body}
              />
            ))
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
