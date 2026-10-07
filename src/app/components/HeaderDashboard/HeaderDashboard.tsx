import { Image, StyleSheet, View } from "react-native";

export default function HeaderDashboard() {
  return (
    <>
      <View style={styles.header}>
        <Image style={styles.image} source={require("../../assets/images/ifoodW.png")} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "red",
    
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    width: 100,
    height: 100,
  },
});
