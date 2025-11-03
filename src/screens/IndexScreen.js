import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  TouchableOpacity,
} from "react-native";
import { useBlogContext } from "../context/BlogContext";
import { ACTION_TYPES } from "../context/actionTypes";
import { Feather } from "@expo/vector-icons";

const IndexScreen = ({ navigation }) => {
  const { state, dispatch } = useBlogContext();

  const addBlogPost = () => {
    dispatch({ type: ACTION_TYPES.ADD_BLOG_POST });
  };

  const deleteBlogPost = (id) => {
    dispatch({ type: ACTION_TYPES.DELETE_BLOG_POST, payload: id });
  };

  return (
    <View style={styles.container}>
      <Button title="Add Post" onPress={addBlogPost} />

      <FlatList
        data={state.blogPosts}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("Show", { id: item.id })}
            >
              <View style={styles.row}>
                <Text>
                  {item.title} - {item.id}
                </Text>
                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                  <Feather style={styles.icon} name="trash" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderColor: "gray",
  },
  icon: {
    size: 24,
    color: "red",
  },
});

export default IndexScreen;
