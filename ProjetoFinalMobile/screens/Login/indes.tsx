import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { PessoaLog, LogCliente } from "../../services/Cliente";
import AsyncStorage from "@react-native-async-storage/async-storage";



export default function Login() {

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [logado, setLogado] = useState("");

   function logar() { 
    const clienteLog : PessoaLog = {email, senha}
    LogCliente(clienteLog)
    .then((response)=>{
      setLogado(response.data.nome);
       AsyncStorage.setItem("logado",response.data.nome)
    })
    .catch((erro)=>{
      console.error(erro);
      throw erro;
    })
  } 


  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cadastre-se informando seus dados abaixo!</Text>

      <Text style={styles.label}>Email:</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu email..."
        value={email}
        onChangeText={(text) => setEmail(text)}
      />

      <Text style={styles.label}>Senha:</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite uma senha..."
        secureTextEntry={true}
        value={senha}
        onChangeText={(text) => setSenha(text)}
      />

       <TouchableOpacity style={styles.button} onPress={logar}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
  button: {
    backgroundColor: "blue",
    marginTop: 30,
    marginLeft: 8,
    marginRight: 8,
    borderRadius: 30,
  },
  buttonText: {
    padding: 8,
    color: "#FFF",
    textAlign: "center",
  },
  label: {
    color: "#000",
    fontSize: 18,
    marginBottom: 4,
    marginLeft: 8,
  },
  input: {
    borderWidth: 1,
    marginLeft: 8,
    marginRight: 8,
    marginBottom: 8,
    borderRadius: 8,
  },
  list: {
    marginTop: 8,
    marginLeft: 8,
    marginRight: 8,
  },
  titulo: {
    textAlign: "center",
    fontSize: 25,
    marginBottom: 30,
  },
});
