import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useBlogContext } from "../context/BlogContext";

const ShowScreen = ({ route }) => {
  const { state } = useBlogContext();
  const { id } = route.params;

  const blogPost = state.blogPosts.find((blogPost) => blogPost.id === id);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{blogPost.title}</Text>
      <Text style={styles.content}>{blogPost.content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#fdfdfd",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 12,
    color: "#333",
    textAlign: "center",
  },
  content: {
    fontSize: 18,
    lineHeight: 26,
    color: "#555",
    textAlign: "left",
  },
});

export default ShowScreen;
