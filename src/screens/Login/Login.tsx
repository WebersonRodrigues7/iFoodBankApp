import { signIn } from "@/services/api";
import { loginSchema, LoginType } from "@/types/loginType";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFonts } from "expo-font";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import Loading from "../../app/components/Loading/Loading";
export default function Login() {
  const [hide, setHide] = useState(false);
  const [page, setPage] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginType>({
    resolver: zodResolver(loginSchema),
  });
  const navigation = useRouter();

  const [fontsLoaded] = useFonts({
    Inter: require("../../app/assets/fonts/Inter.ttf"),
  });

  useEffect(() => {
    setTimeout(() => {
      setPage(true);
    }, 3000);
  }, []);

  async function onSubmit(data: LoginType) {
    const user = await signIn(data);
    if (!user) {
      return;
    }
    navigation.push("/dashboard");
    return user;
  }

  if (page === false) {
    return <Loading />;
  }

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <View style={styles.main}>
        <View style={styles.form}>
          <Text style={styles.textForm}>Olá denovo !</Text>
          <Image
            style={styles.imageLogin}
            source={require("../../app/assets/images/ifoodLogin.png")}
          />
          <Controller<LoginType>
            name="cpf"
            rules={{
              required: true,
            }}
            control={control}
            render={({ field }) => (
              <TextInput
                onBlur={field.onBlur}
                onChangeText={field.onChange}
                value={field.value}
                style={styles.input}
                placeholder="Digite seu CPF"
              />
            )}
          />
          <Controller<LoginType>
            name="password"
            rules={{
              required: true,
            }}
            control={control}
            render={({ field }) => (
              <TextInput
                onBlur={field.onBlur}
                onChangeText={field.onChange}
                value={field.value}
                style={styles.input}
                placeholder="Digite sua senha"
              />
            )}
          />

          <Pressable onPress={handleSubmit(onSubmit)} style={styles.buttonForm}>
            <Text style={styles.textButton}>Continuar</Text>
          </Pressable>
          <Text style={styles.register}>
            Não tem uma conta?{" "}
            <Text style={styles.registerHere}>Registre aqui</Text>
          </Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: "white",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    position: "relative",
    width: 300,
    justifyContent: "center",

    height: 400,
    alignItems: "center",
    gap: 10,
  },
  textForm: {
    color: "red",
    fontFamily: "Inter",
    fontWeight: "bold",
    fontSize: 26,
  },
  imageLogin: {
    width: 100,
    height: 100,
    position: "absolute",
    top: "80%",
    left: "35%",
  },
  input: {
    width: "90%",
    height: 40,
    paddingLeft: 15,
  },
  register: {
    color: "red",
    fontSize: 15,
  },
  registerHere: {
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  buttonForm: {
    backgroundColor: "rgb(247, 2, 2)f1",
    padding: 10,
    width: "90%",
  },
  textButton: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
  },
});
