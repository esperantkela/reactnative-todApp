import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { View, Text } from "react-native";
import { styles } from "./app.style";
import { Header } from "./components/Header";

export default function App() {
  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView style={styles.app}>
          <View style={styles.header}>
            <Header />
          </View>
          <View style={styles.body}>
            <Text>Body</Text>
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
      <View style={styles.footer}>
        <Text>Footer</Text>
      </View>
    </>
  );
}
