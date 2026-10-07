import { StyleSheet, Text, View } from "react-native";
import HeaderDashboard from "./components/HeaderDashboard/HeaderDashboard";
import Wallet from "./components/Wallet/Wallet";
import UtilitiesSection from "./components/UtilitiesSection/UtilitiesSection";

export default function Dashboard() {
  return (
    <>
      <View>
        <View style={styles.topView}>
          <HeaderDashboard />
          <Wallet />
        </View>
        <View>
          <UtilitiesSection />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
    topView: {
      backgroundColor: "red",
      borderRadius: 20
    }
});
