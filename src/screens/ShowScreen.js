import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useBlogContext } from "../context/BlogContext";

const ShowScreen = ({ route }) => {
  const { state } = useBlogContext();
  const { id } = route.params;

  const blogPost = state.blogPosts.find((blogPost) => blogPost.id === id);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalles del post con ID: {blogPost.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
  },
});

export default ShowScreen;
