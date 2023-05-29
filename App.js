import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { styles } from "./app.style";
import { CardTodo } from "./components/CardTodo/CardTodo";
import { Header } from "./components/Header/Header";

export default function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: "Aller faire du sport", isCompleted: true },
    { id: 2, title: "Faire les courses", isCompleted: false },
    { id: 3, title: "Apprendre react native", isCompleted: true },
    { id: 4, title: "Lire un livre", isCompleted: true },
  ]);

  const updateTodo = (todo) => {
    const updatedTodo = {
      ...todo,
      isCompleted: !todo.isCompleted,
    };

    const indexToUpdate = todoList.findIndex(
      (todo) => todo.id === updatedTodo.id
    );
    const updatedTodoList = [...todoList];
    updatedTodoList[indexToUpdate] = updatedTodo;

    setTodoList(updatedTodoList);
  };
  const renderTodoList = () => {
    return todoList.map((todo) => (
      <View style={styles.cardItem} key={todo.id}>
        <CardTodo onPress={updateTodo} todo={todo} />
      </View>
    ));
  };
  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView style={styles.app}>
          <View style={styles.header}>
            <Header />
          </View>
          <View style={styles.body}>
            <ScrollView>{renderTodoList()}</ScrollView>
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
      <View style={styles.footer}>
        <Text>Footer</Text>
      </View>
    </>
  );
}
