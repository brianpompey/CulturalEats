import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const HomePage = ({ navigation }) => {
  // const navigate = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Cultural Eats</Text>
      <Text style={styles.headingDescriptText}>
        Where you can discover new recipes from
      </Text>
      <Text style={styles.headingDescriptText}>
        different cultures all over the world!
      </Text>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("RecipeCategories")}
      >
        <Text>Let's Cook!</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 24,
    backgroundColor: "#344955",
    alignItems: "center",
    justifyContent: "center",
  },
  headingText: {
    // top: 110,
    // left: 110,
    bottom: 100,
    fontSize: 30,
    color: "#FF0000",
  },
  headingDescriptText: {
    // top: 130,
    // left: 50,
    bottom: 90,
    fontSize: 15,
    color: "white",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 10,
    // elevation: 3,
    backgroundColor: "green",
  },
});

export default HomePage;
