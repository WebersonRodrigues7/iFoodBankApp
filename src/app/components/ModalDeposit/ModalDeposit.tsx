import { Deposit } from "@/services/deposit";
import { DepositType, schemaDeposit } from "@/types/depositType";
import { ModalI } from "@/types/modalInterface";
import AntDesign from "@expo/vector-icons/AntDesign";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";



export default function ModalDeposit({ modal, setModal }: ModalI) {
  const [deposit, setDeposit] = useState<DepositType>();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<DepositType>({
    resolver: zodResolver(schemaDeposit),
  });

  async function depositFunc(data: DepositType) {
    const response = await Deposit(data.amount);

    setDeposit(response);
  }
  return (
    <>
      <View style={styles.container}>
        <AntDesign
          onPress={() => setModal(!modal)}
          style={styles.closeIcon}
          name="close"
          size={20}
          color="red"
        />
        <Controller<DepositType>
          name="amount"
          rules={{
            required: true,
          }}
          control={control}
          render={({ field }) => (
            <TextInput
              value={field.value?.toString() ?? ""}
              onBlur={field.onBlur}
              onChangeText={(value) => field.onChange(Number(value))}
              placeholder="Digite o valor"
            />
          )}
        />

        <Pressable onPress={handleSubmit(depositFunc)} style={styles.button}>
          <Text style={styles.textButton}>Depositar</Text>
        </Pressable>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    backgroundColor: "white",
    padding: 20,
    position: "absolute",
    height: "100%",
    width: "80%",
    top: "50%",
    boxShadow: "1px 1px 7px 1px #00000067",
    borderRadius: 8,
    gap: 20,
    zIndex: 1,
  },
  closeIcon: {
    position: "absolute",
    top: 7,
    left: "104%",
  },
  button: {
    backgroundColor: "red",
    alignItems: "center",
    padding: 10,
    borderRadius: 8,
  },
  textButton: {
    color: "white",
    fontWeight: "bold",
  },
});
