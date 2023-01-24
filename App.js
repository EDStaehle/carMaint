import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Home from './components/Welcome';
export default function App() {

  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
      <StatusBar style="auto" />
      <Text>this is a second bar</Text>
      <TextInput>type here</TextInput>
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
