import React from "react";
import { StyleSheet } from "react-native";
import { useBlogContext } from "../context/BlogContext";
import { ACTION_TYPES } from "../context/actionTypes";
import BlogPostForm from "../components/BlogPostForm";

const CreateScreen = ({ navigation }) => {
  const { dispatch } = useBlogContext();

  const addBlogPost = (title, content) => {
    dispatch({ type: ACTION_TYPES.ADD_BLOG_POST, payload: { title, content } });
    navigation.navigate("Index");
  };

  return <BlogPostForm onSubmit={addBlogPost} />;
};

const styles = StyleSheet.create({});

export default CreateScreen;
