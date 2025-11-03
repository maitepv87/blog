import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { BlogProvider } from "./src/context/BlogContext";
import { TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

import IndexScreen from "./src/screens/IndexScreen";
import ShowScreen from "./src/screens/ShowScreen";
import CreateScreen from "./src/screens/CreateScreen";
import EditScreen from "./src/screens/EditScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <BlogProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Index">
          <Stack.Screen
            name="Index"
            component={IndexScreen}
            options={({ navigation }) => ({
              title: "Blogs",
              headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate("Create")}>
                  <Feather name="plus" size={30} style={{ marginRight: 15 }} />
                </TouchableOpacity>
              ),
            })}
          />
          <Stack.Screen
            name="Show"
            component={ShowScreen}
            options={({ route, navigation }) => ({
              title: "Blog Details",
              headerRight: () => (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("Edit", { id: route.params.id })
                  }
                >
                  <Feather name="edit" size={24} style={{ marginRight: 15 }} />
                </TouchableOpacity>
              ),
            })}
          />
          <Stack.Screen
            name="Create"
            component={CreateScreen}
            options={{ title: "Nuevo Post" }}
          />
          <Stack.Screen
            name="Edit"
            component={EditScreen}
            options={{ title: "Edit Post" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </BlogProvider>
  );
}
