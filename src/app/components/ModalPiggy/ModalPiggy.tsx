import { ModalI } from "@/types/modalInterface";
import { PiggyType, schemaPiggy } from "@/types/piggyType";
import AntDesign from "@expo/vector-icons/AntDesign";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { StyleSheet, TextInput, View } from "react-native";

export default function ModalPiggy({ modal, setModal }: ModalI) {
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<PiggyType>({
    resolver: zodResolver(schemaPiggy),
  });

  return (
    <>
      <View style={styles.container}>
        <AntDesign
          onPress={() => setModal(!modal)}
          style={styles.closeIcon}
          name="close"
        />
        <TextInput placeholder="Digite o nome do porquinho" />
        <TextInput placeholder="Digite o valor a ser depositado" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    zIndex: 1,
    backgroundColor: "brown",
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    height: 300,
  },
  closeIcon: {
    position: "absolute",
    left: "93%",
    top: 10,
  },
});
