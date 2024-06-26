import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image } from "react-native";
import { PessoaLog, LogCliente } from "../../services/Cliente";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { styles } from '../Login/styles';
import { useNavigation } from "@react-navigation/native";



export default function Login() {

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [logado, setLogado] = useState("");
  const navigation = useNavigation();

   function logar() { 
    const clienteLog : PessoaLog = {email, senha}
    LogCliente(clienteLog)
    .then((response)=>{
      setLogado(response.data.nome);
       AsyncStorage.setItem("logado",response.data.nome)
       navigation.navigate("Avaliacao");
       setEmail("");
       setSenha("");
    })
    .catch((erro)=>{
      console.error(erro);
      throw erro;
    })
  } 
      return (
    <View style={styles.container}>
      <Image 
      style={styles.titulo} 
      source={require("../../assets/log.png")}
      />

      <TextInput
        style={styles.input}
        placeholder=" Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />

      <TextInput
        style={styles.input}
        placeholder=" Senha"
        secureTextEntry={true}
        value={senha}
        onChangeText={(text) => setSenha(text)}
      />

       <TouchableOpacity style={styles.button} onPress={logar}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity> 
      
       <Text style={styles.buttonTextt} onPress={() => navigation.navigate('Cadastro')}>Cadastre-se</Text>
 
    </View>
  
  );
}
//     <View style={styles.container}>
//       <Text style={styles.titulo}>Cadastre-se informando seus dados abaixo!</Text>

//       <Text style={styles.label}>Email:</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Digite seu email..."
//         value={email}
//         onChangeText={(text) => setEmail(text)}
//       />

//       <Text style={styles.label}>Senha:</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Digite uma senha..."
//         secureTextEntry={true}
//         value={senha}
//         onChangeText={(text) => setSenha(text)}
//       />

//        <TouchableOpacity style={styles.button} onPress={logar}>
//         <Text style={styles.buttonText}>Login</Text>
//       </TouchableOpacity> 
//     </View>
//   );
// }
