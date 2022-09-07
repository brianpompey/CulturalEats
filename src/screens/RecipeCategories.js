import React from "react";
import { StyleSheet, View, Text } from "react-native";


const RecipeCategories = () => {
    return (
        <View style={styles.container}>
            <Text>Recipe Categories</Text>
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

export default RecipeCategories;