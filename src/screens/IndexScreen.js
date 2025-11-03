import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useBlogContext } from "../context/BlogContext";
import { ACTION_TYPES } from "../context/actionTypes";
import { Feather } from "@expo/vector-icons";

const IndexScreen = ({ navigation }) => {
  const { state, dispatch } = useBlogContext();

  const deleteBlogPost = (id) => {
    dispatch({ type: ACTION_TYPES.DELETE_BLOG_POST, payload: id });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={state.blogPosts}
        keyExtractor={(blogPost) => blogPost.id.toString()}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("Show", { id: item.id })}
            >
              <View style={styles.row}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.id}>ID: {item.id}</Text>
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
    fontSize: 20,
    color: "red",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  id: {
    fontSize: 14,
    color: "#888",
  },
});

export default IndexScreen;
