import { StyleSheet, View, StatusBar, FlatList, Button } from "react-native";
import { useState } from "react";

import GoalList from "./components/GoalList";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [inputVisibility, setInputVisibility] = useState(false);

  const btnPressed = (enteredText) => {
    if (enteredText === "") {
      setGoals((current) => [...current]);
    } else {
      setGoals((current) => [
        ...current,
        { text: enteredText, id: Math.random().toString() },
      ]);
    }
  };

  const deleteIt = (id) => {
    setGoals((currentList) => {
      return currentList.filter((el) => el.id !== id);
    });
  };

  const changeVisibility = () => {
    setInputVisibility(true);
  };
  const closeVisibility = () => {
    setInputVisibility(false);
  };

  return (
    <View style={styles.container}>
      <Button title="Add Goals" onPress={changeVisibility} color="#a065ec" />
      <GoalInput
        visibility={inputVisibility}
        closeVisibility={closeVisibility}
        function={btnPressed}
      />

      <View style={styles.goalsList}>
        <FlatList
          data={goals}
          renderItem={(el) => (
            <GoalList
              text={el.item.text}
              id={el.item.id}
              deleteItem={deleteIt}
            />
          )}
        />
        <StatusBar barStyle="bark-content" backgroundColor="#1e085a" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 100 + "%",
    padding: 20,
    marginBottom: 0,
    backgroundColor: "#1e085a",
  },
  goalsList: {
    flex: 4,
    marginTop: 10,
    paddingLeft: 5,
    paddingRight: 5,
  },
});
