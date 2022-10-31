import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

const GoalList = (prop) => {
  return (
    <View>
      <Pressable
        style={({ pressed }) => pressed && styles.btnIsPressed}
        onPress={() => prop.deleteItem(prop.id)}
      >
        <Text android_ripple={{ color: "black" }} style={styles.goalEntry}>
          {prop.text} {}
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  goalEntry: {
    textAlign: "center",
    backgroundColor: "#5e0acc",
    color: "white",
    padding: 10,
    borderRadius: 10,
    marginTop: 15,
  },
  btnIsPressed: {
    opacity: 0.6,
  },
});

export default GoalList;
