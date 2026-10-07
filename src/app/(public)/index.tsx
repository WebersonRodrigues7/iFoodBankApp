import Loading from "../components/Loading/Loading";
import { StyleSheet, View } from "react-native";
import Login from "../../screens/Login/Login";
export default function App() {
  return (
    <>
      <View style={styles.main}>
        <Login />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
});
