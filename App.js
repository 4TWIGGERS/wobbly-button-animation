import { StyleSheet, View } from "react-native";
import Wobbly from "./src/Wobbly";

export default function App() {
  return (
    <View style={styles.container}>
      <Wobbly />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
