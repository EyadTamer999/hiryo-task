import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";

// state management
import { useDispatch, useSelector } from "react-redux";
import { setPosts, selectPosts } from "../../../slices/postSlice";
// api
import { getPosts } from "./fetchApi";
// Components
import PostCard from "./component/PostCard";

export default function HomeScreen() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (posts.length === 0) {
      console.log("Fetching posts");
      getPosts().then((data) => dispatch(setPosts(data)));
    }
  }, []);

  const posts = useSelector(selectPosts);

  return (
    <SafeAreaView className="bg-white p-4 h-full w-full">
      <View>
        <Text className="text-2xl font-bold text-gray-900 mb-4">Your Feed</Text>
        <ScrollView>
          {posts.map((post) => (
            <PostCard
              key={post.id}
              postId={post.id}
              avatar={"https://thispersondoesnotexist.com/"}
              userName={post.user_id.toString()}
              title={post.title}
              content={post.body}
            />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
