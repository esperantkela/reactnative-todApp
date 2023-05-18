import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Text } from "react-native";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Text>Hello world</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
