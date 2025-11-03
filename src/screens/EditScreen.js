import React from "react";
import { StyleSheet } from "react-native";
import { useBlogContext } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";
import { ACTION_TYPES } from "../context/actionTypes";

const EditScreen = ({ route, navigation }) => {
  const { state, dispatch } = useBlogContext();
  const { id } = route.params;

  const blogPost = state.blogPosts.find((blogPost) => blogPost.id === id);

  const editBlogPost = (title, content) => {
    dispatch({
      type: ACTION_TYPES.EDIT_BLOG_POST,
      payload: { id, title, content },
    });
    navigation.navigate("Index");
  };

  return (
    <BlogPostForm
      initialValues={{ title: blogPost.title, content: blogPost.content }}
      onSubmit={(title, content) => editBlogPost(title, content)}
    />
  );
};

const styles = StyleSheet.create({});

export default EditScreen;
