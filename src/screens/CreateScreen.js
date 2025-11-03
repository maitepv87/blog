import React from "react";
import { View, Text, StyleSheet } from "react-native";

const CreateScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Crear nuevo post</Text>
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

export default CreateScreen;
