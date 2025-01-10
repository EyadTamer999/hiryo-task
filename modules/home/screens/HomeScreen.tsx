import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";

// state management
import { useDispatch, useSelector } from "react-redux";
import { setPosts, selectPosts } from "../../../slices/postSlice";
// api
import { getPosts } from "../../../services/api";
// Components
import PostCard from "./component/PostCard";

export default function HomeScreen() {
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);

  useEffect(() => {
    if (posts.length === 0) {
      console.log("Fetching posts");
      getPosts()
        .then((data) => {
          dispatch(setPosts(data));
          setLoading(false); // Set loading to false after data is fetched
        })
        .catch((error) => {
          console.error("Error fetching posts:", error);
          setLoading(false); // Handle error and stop loading
        });
    } else {
      setLoading(false); // Stop loading if posts are already available
    }
  }, [dispatch, posts]);

  const [loading, setLoading] = useState(true);

  return (
    <SafeAreaView className="bg-white p-4 h-full w-full">
      <View>
        <Text className="text-2xl font-bold text-gray-900 mb-4">Your Feed</Text>
        {/* Loading Indicator */}
        {loading ? (
          <View className="flex-1 justify-center items-center">
            <ActivityIndicator size="large" color="#000000" />
          </View>
        ) : (
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
        )}
      </View>
    </SafeAreaView>
  );
}
