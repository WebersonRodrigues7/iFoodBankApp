import { GetWallet } from "@/services/wallet";
import { walletI } from "@/types/walletInterface";
import { FontAwesome5 } from "@/utils/Icons";
import { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import ModalDeposit from "../ModalDeposit/ModalDeposit";

export default function Wallet() {
  const [hide, setHide] = useState(false);
  const [modal, setModal] = useState(false);
  const [wallet, setWallet] = useState<walletI>();
  useEffect(() => {
    async function getCurrentUser() {
      const wallet = await GetWallet();

      setWallet(wallet);
    }

    getCurrentUser();
  }, [wallet]);

  return (
    <View style={styles.main}>
      {modal && <ModalDeposit modal setModal={setModal} />}
      <View style={styles.wallet}>
        <View style={styles.topWall}>
          <View style={styles.left}>
            <Text style={styles.account}>Conta</Text>
            <Text style={hide ? styles.ammount : styles.ammountBlur}>
              R$ {wallet?.amount}
            </Text>
            <Text style={styles.cdi}>Pode render 102% do CDI</Text>
          </View>
          <View style={styles.right}>
            {hide ? (
              <Pressable onPress={() => setHide(!hide)}>
                <FontAwesome5 name="eye" size={20} color="white" />
              </Pressable>
            ) : (
              <Pressable onPress={() => setHide(!hide)}>
                <FontAwesome5 name="eye-slash" size={20} color="white" />
              </Pressable>
            )}
          </View>
        </View>
        <View style={styles.bottom}>
          <Pressable onPress={() => setModal(!modal)} style={styles.deposit}>
            <Text style={styles.textDeposit}>Depositar</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    height: 250,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  wallet: {
    backgroundColor: "#c70404",
    height: 180,
    padding: 20,
    width: "80%",
    borderRadius: 13,
  },
  topWall: {
    flexDirection: "row",
    gap: 20,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    height: "70%",
  },
  left: {
    gap: 10,
  },
  account: {
    color: "white",
  },
  ammount: {
    height: 25,
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    alignItems: "center",
  },
  ammountBlur: {
    fontSize: 20,
    color: "#ffffffe0",
    backgroundColor: "#ffffff",
    borderRadius: 5,
    width: 100,
    height: 25,
    backdropFilter: "blur(5px)",
    fontWeight: "bold",
    alignItems: "center",
  },
  cdi: {
    color: "white",
  },
  right: {
    alignItems: "flex-end",
    justifyContent: "center",
    paddingRight: 20,
    width: "40%",
    height: "70%",
  },
  bottom: {
    width: "100%",
  },
  deposit: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    backgroundColor: "rgba(248, 246, 248, 0.4)f1",
    height: 40,
  },
  textDeposit: {
    color: "white",
  },
});
