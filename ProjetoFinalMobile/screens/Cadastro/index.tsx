import { useEffect, useState } from "react";
import { Text, View, TextInput, TouchableOpacity, Image } from "react-native";
import { Pessoa, addCliente } from "../../services/Cliente";
import  {styles}  from "../Cadastro/styles";
import { useNavigation } from "@react-navigation/native";

export default function Cadastro() {
    const [nome, setNome] = useState("");
    const [telefone, setTelefone] = useState("");
    const [email, setEmail] = useState("");
    const [cpf, setCpf] = useState("");
    const [senha, setSenha] = useState("");
    const [cep, setCep] = useState("");
    const navigation = useNavigation();

    function adicionar(): Pessoa {
        const clienteSave: Pessoa = { nome, cpf, email, senha, telefone };
        return clienteSave;
    }

    return (
        <View style={styles.container}>
           <Image 
      style={styles.titulo} 
      source={require("../../assets/log.png")}
      />

            <TextInput
                style={styles.input}
                placeholder=" Nome"
                value={nome}
                onChangeText={(text) => setNome(text)}
            />

            <TextInput
                style={styles.input}
                placeholder=" Telefone"
                value={telefone}
                onChangeText={(text) => setTelefone(text)}
            />

            <TextInput
                style={styles.input}
                placeholder=" Email"
                value={email}
                onChangeText={(text) => setEmail(text)}
            />

            <TextInput
                style={styles.input}
                placeholder=" CPF"
                value={cpf}
                onChangeText={(text) => setCpf(text)}
            />

            <TextInput
                style={styles.input}
                placeholder=" Senha"
                value={senha}
                onChangeText={(text) => setSenha(text)}
            />

            <TextInput
                style={styles.input}
                placeholder=" CEP"
                value={cep}
                onChangeText={(text) => setCep(text)}
            />

            <TouchableOpacity style={styles.button} onPress={() => addCliente(adicionar(), cep)}>
                <Text style={styles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>
            <Text style={styles.buttonTextt} onPress={() => navigation.navigate('Login')}>Login</Text>
        </View>
    );
}


























// import { useEffect, useState } from "react";
// import { Text, View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
// import { Pessoa, addCliente } from "../../services/Cliente";

// export default function Cadastro(){
//     const [nome, setNome] = useState("");
//     const [telefone, setTelefone] = useState("");
//     const [email, setEmail] = useState("");
//     const [cpf, setCpf] = useState("");
//     const [senha, setSenha] = useState("");
//     const [cep, setCep] = useState("");

    
//     function adicionar ():Pessoa {
//       const clienteSave: Pessoa = { nome, cpf, email, senha, telefone }; 
//       return clienteSave;
//     }


//     return (
//         <View style={styles.container}>
//             <Text style={styles.titulo}>Cadastre-se informando seus dados abaixo!</Text>

//             <Text style={styles.label}>Nome:</Text>
//             <TextInput
//             style={styles.input}
//             placeholder="Digite seu nome..."
//             value={nome}
//             onChangeText={(text) => setNome(text)}
//             />

//             <Text style={styles.label}>Telefone:</Text>
//             <TextInput
//             style={styles.input}
//             placeholder="Digite seu telefone..."
//             value={telefone}
//             onChangeText={(text) => setTelefone(text)}
//             />

//             <Text style={styles.label}>Email:</Text>
//             <TextInput
//             style={styles.input}
//             placeholder="Digite seu email..."
//             value={email}
//             onChangeText={(text) => setEmail(text)}
//             />

//             <Text style={styles.label}>Cpf:</Text>
//             <TextInput
//             style={styles.input}
//             placeholder="Digite seu cpf..."
//             value={cpf}
//             onChangeText={(text) => setCpf(text)}
//             />

//             <Text style={styles.label}>Senha:</Text>
//             <TextInput
//             style={styles.input}
//             placeholder="Digite uma senha..."
//             value={senha}
//             onChangeText={(text) => setSenha(text)}
//             />

//             <Text style={styles.label}>Cep:</Text>
//             <TextInput
//             style={styles.input}
//             placeholder="Digite CEP..."
//             value={cep}
//             onChangeText={(text) => setCep(text)}
//             />

//         <TouchableOpacity style={styles.button} onPress={()=>addCliente(adicionar(),cep)}>
//           <Text style={styles.buttonText}>Cadastrar</Text>
//         </TouchableOpacity>

//         </View>

            
//     )
// }

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       paddingTop: 40,
//     },
//     button: {
//       backgroundColor: "blue",
//       marginTop: 30, 
//       marginLeft: 8,
//       marginRight: 8,
//       borderRadius: 30,
//     },
//     buttonText: {
//       padding: 8,
//       color: "#FFF",
//       textAlign: "center",
//     },

//     label: {
//       color: "#000",
//       fontSize: 18,
//       marginBottom: 4,
//       marginLeft: 8,
//     },
//     input: {
//       borderWidth: 1,
//       marginLeft: 8,
//       marginRight: 8,
//       marginBottom: 8,
//       borderRadius: 8,
//     },
//     list: {
//       marginTop: 8,
//       marginLeft: 8,
//       marginRight: 8,
//     },
//     titulo:{
//         textAlign: "center",
//         fontSize: 25,
//         marginBottom:30,
//     },
//   });
  