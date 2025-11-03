import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import { useBlogContext } from "../context/BlogContext";
import { ACTION_TYPES } from "../context/actionTypes";

const CreateScreen = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const { dispatch } = useBlogContext();

  const addBlogPost = (title, content) => {
    dispatch({ type: ACTION_TYPES.ADD_BLOG_POST, payload: { title, content } });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter Title:</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={(newTitle) => setTitle(newTitle)}
      />
      <Text style={styles.label}>Enter Content:</Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={(newContent) => setContent(newContent)}
      />
      <Button
        title="Add Blog Post"
        onPress={() => {
          addBlogPost(title, content);
          navigation.navigate("Index");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "black",
    width: "100%",
    marginBottom: 12,
    padding: 8,
  },
  label: {
    fontSize: 20,
    alignSelf: "flex-start",
    marginBottom: 4,
  },
});

export default CreateScreen;
