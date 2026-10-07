import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { StyleSheet, Text, View } from "react-native";

interface CardsUtilitiesI {
  name: string;
  iconName: string;
  
}

export default function CardsUtilities({ name, iconName}: CardsUtilitiesI) {
  return (
    <>
      <View  style={styles.main}>
        <View style={styles.container}>
            <FontAwesome6 name={iconName} size={30} color="white" />
        </View>
        <Text>{name}</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
    main: {
        
        justifyContent: "center",
        alignItems: "center"
    },
    container: {
        padding: 30,
        borderRadius: 26,
        width: 100,
        justifyContent: "center",
        alignItems:"center",
        backgroundColor: "red"
    }

})
