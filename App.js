import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Home from "./src/screens/home/home.jsx";

export default function App() {
  return (
      <Home />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
