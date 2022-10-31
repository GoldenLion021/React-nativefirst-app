import { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Button,
  Modal,
  Image,
} from "react-native";

const GoalInput = (prop) => {
  const [enteredText, setEnteredText] = useState("");

  const inputHandler = (text) => {
    setEnteredText(text);
  };

  const addInList = () => {
    prop.function(enteredText);
    setEnteredText("");
    prop.closeVisibility();
  };

  return (
    <Modal visible={prop.visibility} animationType="slide">
      <View style={styles.addGoals}>
        <Image
          style={styles.img}
          source={require("../assets/image/target.png")}
        />
        <TextInput
          style={styles.inputField}
          placeholder="Type your goal here"
          onChangeText={inputHandler}
          value={enteredText}
        />
        <View style={styles.btns}>
          <Button title="Add goal" color="#b180f0" onPress={addInList} />
          <Button
            onPress={() => {
              prop.closeVisibility();
              setEnteredText("");
            }}
            title="Close"
            color="#f31282"
          />
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  addGoals: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#311b6b",
  },
  inputField: {
    width: "80%",
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    borderRadius: 10,
    color: "black",
    padding: 10,
    paddingLeft: 20,
    marginRight: 10,
  },
  btns: {
    marginTop: 40,
    width: "50%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  img: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
});
