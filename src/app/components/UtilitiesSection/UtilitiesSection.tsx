import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import CardsUtilities from "../CardsUtilities/CardsUtilities";
import ModalPiggy from "../ModalPiggy/ModalPiggy";

export default function UtilitiesSection() {
  const [modal, setModal] = useState(false);
  return (
    <>
      <View style={styles.main}>
        {modal && (<ModalPiggy modal setModal={setModal} />)}
        <Text style={styles.title}>Pro dia a dia</Text>
        <View style={styles.cardsUtilities}>
          <CardsUtilities name="Pix" iconName="pix" />
          <Pressable onPress={() => setModal(!modal)}>
            <CardsUtilities name="Piggy" iconName="piggy-bank" />
          </Pressable>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  main: {
    position: "relative",
    flexDirection: "column",
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  cardsUtilities: {
    flexDirection: "row",
    gap: 20,
    justifyContent: "center",
  },
});
