import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

const BlogPostForm = ({
  onSubmit,
  initialValues = { title: "", content: "" },
}) => {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Title:</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={(newTitle) => setTitle(newTitle)}
      />
      <Text style={styles.label}>Content:</Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={(newContent) => setContent(newContent)}
        multiline
        numberOfLines={4}
      />
      <Button title="Save Blog Post" onPress={() => onSubmit(title, content)} />
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

export default BlogPostForm;
