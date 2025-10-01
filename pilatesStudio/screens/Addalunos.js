import { View, Text, TextInput, TouchableOpacity,StyleSheet} from "react-native";
import { db } from "../ControleFirebase";
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";

const dataHoje = new Date()
const dataFormatada = dataHoje.toLocaleDateString();

var dataMensalidade = new Date(new Date(dataHoje).setMonth(dataHoje.getMonth() + 1));
console.log(dataMensalidade);
export default function Addalunos() {
    const [aniversario,setAniversario] = useState("");
    const [convenio,setConvenio] = useState("");
    const [dataMatricula,setDataMatricula] = useState("");
    const [dataPagamento,setDataPagamento] = useState("");
    const [endereco,setEndereco] = useState("");
    const [idade,setIdade] = useState("");
    const [modalidade,SetModalidade] = useState("");
    const [nome,setNome] = useState("");
    const [patologia,setPatologia] = useState("");
    const [sexo,setSexo] = useState("");
    const [turma,setTurma] = useState("");

    const cadastrarAluno = async () => {
        try{
            await addDoc(collection(db, 'Alunos'),{
                nome,
                idade: parseInt(idade)
            });
            setNome('');
        }catch(error){
            console.log('erro no cadastro do aluno')
        } 
    }
    return(
         <View style={styles.add}>
                    <Text style={styles.titulo}>Cadastro Aluno</Text>
                    <View>
                        <TextInput style={styles.input} placeholder="Nome" inputMode='text' value={nome} onChangeText={setNome} />
                                            </View>
                    <TouchableOpacity style={styles.bo} onPress={cadastrarAluno}>
                        <Text style={styles.tsxtbo}>Adicionar produto</Text>
                    </TouchableOpacity>
                </View>
    )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cde2db',
    alignItems: 'center',
   
  },
  texto: {
    fontFamily:'Overlock SC',
    color:'#4e5a5e',
    fontSize: 70,
    marginTop:20
  },
   add:{
        alignItems:'center',
        justifyContent:'space-around',
        backgroundColor:'#fad2dd',
        flex:1,
    },
    titulo:{
        fontSize:50,
        alignSelf:'center',
        color:'#a8a8ed',
        textDecorationStyle:'dashed',
        textDecorationLine:'underline',
    },
    input:{
        fontSize:30,
        borderWidth:1,
        borderColor:'#7575e0',
        margin:20,
        color:'#7575e0',
        padding:10,
    },
    bo:{
        width:'40%',
        backgroundColor:'#7575e0',
        borderRadius:10,
    },
    tsxtbo:{
        color:'#ffff',
        textAlign:'center',
        fontSize:35,
        textAlignVertical:'center',
        margin:1
    }
});
