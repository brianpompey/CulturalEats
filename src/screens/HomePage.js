import React from "react";
import { StyleSheet, Text, View } from "react-native";

function HomePage() {
    return(
        <View>
            <Text>Hello World</Text>
        </View>
    )

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default HomePage;