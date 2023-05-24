import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { View, Text } from "react-native";
import { styles } from "./app.style";
import { Header } from "./components/Header";
import { CardTodo } from "./components/CardTodo/CardTodo";

const TODO_LIST = [
  { id: 1, title: "Aller faire du sport", isCompleted: true },
  { id: 2, title: "Faire les courses", isCompleted: false },
  { id: 3, title: "Apprendre react native", isCompleted: true },
  { id: 4, title: "Lire un livre", isCompleted: true },
];
export default function App() {
  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView style={styles.app}>
          <View style={styles.header}>
            <Header />
          </View>
          <View style={styles.body}>
            <CardTodo todo={TODO_LIST[0]} />
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
      <View style={styles.footer}>
        <Text>Footer</Text>
      </View>
    </>
  );
}
