import { StyleSheet, View, Text, Image } from "react-native";

export default function Loading() {
  return (
    <>
      <View style={styles.screen}>
        <Image
          style={styles.image}
          source={require("../../assets/images/ifoodLogin.png")}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 300,
    height: 300,
  },
});
