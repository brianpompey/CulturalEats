import React from "react";
import { StyleSheet, Text, View } from "react-native";

function HomePage() {
    return(
        <View styles={styles.container}>
            <Text style={styles.headingText}>Cultural Eats</Text>
        </View>
    )

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  headingText: {
    top: 80,
    left: 110,
    fontSize: 30,
    color: '#FF0000',
  },
});


export default HomePage;