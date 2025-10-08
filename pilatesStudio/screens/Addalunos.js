import { View, Text, TextInput, TouchableOpacity,StyleSheet} from "react-native";
import { db } from "../ControleFirebase";
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { ScrollView } from "react-native";

const dataHoje = new Date()
const dataFormatada = dataHoje.toLocaleDateString();

var dataMensalidade = new Date(new Date(dataHoje).setMonth(dataHoje.getMonth() + 1));
console.log(dataMensalidade);

export default function Addalunos() {
    const [Aniversario,setAniversario] = useState("");
    const [Convenio,setConvenio] = useState("");
    const [DataMatricula,setDataMatricula] = useState("");
    const [DataPagamento,setDataPagamento] = useState("");
    const [Endereco,setEndereco] = useState("");
    const [Idade,setIdade] = useState("");
    const [Modalidade,SetModalidade] = useState("");
    const [Nome,setNome] = useState("");
    const [Patologia,setPatologia] = useState("");
    const [Sexo,setSexo] = useState("");
    const [TurmaUm,setTurmaUm] = useState("");
    const [TurmaDois,setTurmaDois] = useState("");

    const cadastrarAluno = async () => {
        try{
            await addDoc(collection(db, 'Alunos'),{
                Aniversario,
                Convenio,
                DataMatricula,
                DataPagamento,
                Endereco,
                Idade:parseInt(Idade),
                Modalidade,
                Nome,
                Patologia,
                Sexo,
                TurmaDois,
                TurmaUm
            });
            setAniversario(''),
            setConvenio(''),
            setDataMatricula(''),
            setDataPagamento(''),
            setEndereco(''),
            setIdade(),
            setNome(''),
            setPatologia(''),
            setSexo(''),
            SetModalidade(''),
            setTurmaDois(''),
            setTurmaUm('')
            alert('Aluno cadastrado')
        }catch(error){
            console.log('erro no cadastro do aluno'+error)
            alert("Erro ao cadastrar aluno, tente novamente")
        } 
    }
    return(
         <View style={styles.add}>
                    <Text style={styles.titulo}>Cadastro Aluno</Text>
                    <ScrollView>
                        <TextInput style={styles.input} placeholder="Nome" inputMode='text' value={Nome} onChangeText={setNome} />
                        <TextInput style={styles.input} placeholder="Idade" inputMode='text' value={Idade} onChangeText={setIdade} />
                        <TextInput style={styles.input} placeholder="Sexo" inputMode='text' value={Sexo} onChangeText={setSexo} />
                        <TextInput style={styles.input} placeholder="Convênio" inputMode='text' value={Convenio} onChangeText={setConvenio} />
                        <TextInput style={styles.input} placeholder="Modalidade" inputMode='text' value={Modalidade} onChangeText={SetModalidade} />
                        <TextInput style={styles.input} placeholder="Aniversário (dd/mm/yyyy)" inputMode='text' value={Aniversario} onChangeText={setAniversario} />
                        <TextInput style={styles.input} placeholder="Data de matrícula (dd/mm/yyyy)" inputMode='text' value={DataMatricula} onChangeText={setDataMatricula} />
                        <TextInput style={styles.input} placeholder="Próxima data de pagamento (dd/mm/yyyy)" inputMode='text' value={DataPagamento} onChangeText={setDataPagamento} />
                        <TextInput style={styles.input} placeholder="Endereço" inputMode='text' value={Endereco} onChangeText={setEndereco} />
                        <TextInput style={styles.input} placeholder="Patologia" inputMode='text' value={Patologia} onChangeText={setPatologia} />
                        <TextInput style={styles.input} placeholder="Turma um (código)" inputMode='text' value={TurmaUm} onChangeText={setTurmaUm} />
                        <TextInput style={styles.input} placeholder="Turma dois (código)" inputMode='text' value={TurmaDois} onChangeText={setTurmaDois} />
                    <TouchableOpacity style={styles.bo} onPress={cadastrarAluno}>
                        <Text style={styles.tsxtbo}>Adicionar Aluno</Text>
                    </TouchableOpacity>
                    </ScrollView>
                </View>
    )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b86516',
    alignItems: 'center',
   
  },
  titulo: {
    fontFamily:'Overlock SC',
    color:'#4e5a5e',
    fontSize: 55,
    alignSelf:'center',
    marginTop:75
  },
   add:{
        alignItems:'center',
        justifyContent:'space-around',
        backgroundColor:'#b86516',
        flex:1,
    },
    input:{
        fontSize:30,
        borderWidth:1,
        borderColor:'#4e5a5e',
        margin:20,
        color:'#4e5a5e',
        padding:10,
    },
    bo:{
        width:'80%',
        backgroundColor:'#4e5a5e',
        borderRadius:10,
        alignSelf:'center',
        marginBottom:10
    },
    tsxtbo:{
        color:'#ffff',
        textAlign:'center',
        fontSize:35,
        textAlignVertical:'center',
        margin:1
    }
});
