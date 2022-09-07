import React from "react";
import { StyleSheet, View, Text } from "react-native";


const RecipeList = () => {
    return(
        <View style={styles.container}>
            <Text>Recipe List</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#344955',
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default RecipeList;