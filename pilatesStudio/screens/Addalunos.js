import { View, Text, TextInput, TouchableOpacity,StyleSheet} from "react-native";
import { db } from "../ControleFirebase";
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { ScrollView } from "react-native";
import { Picker } from "@react-native-picker/picker";

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
    const [Preco,setPreco] = useState();
    let [Status,setStatus] = useState("");
    Status = "Não Pago"

    

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
    const cadastrarMensalidade = async () => {
        try{
            await addDoc(collection(db, 'Mensalidade'),{
                DataPagamento,
                Nome,
                Preco,
                Status,
                
            });
            setDataPagamento(''),
            setNome(''),

            setPreco(),
            setStatus('Não Pago')
                   
            }catch(error){
            console.log('erro no cadastro da Mensalidade'+error)
            alert("Erro ao cadastrar Mensalidade, tente novamente")
        } 
    }
    const paraPress = () =>{
        cadastrarAluno();
        cadastrarMensalidade();
    };
    return(
         <View style={styles.add}>
                    <Text style={styles.titulo}>Cadastro Aluno</Text>
                    <ScrollView>
                        
                        <TextInput style={styles.input} placeholder="Nome" inputMode='text' value={Nome} onChangeText={setNome} />
                        <TextInput style={styles.input} placeholder="Idade" inputMode='text' value={Idade} onChangeText={setIdade} />
                        
                        <TextInput style={styles.input} placeholder="Preço" inputMode='text' value={Preco} onChangeText={setPreco} />
                        <TextInput style={styles.input} placeholder="Aniversário (dd/mm)" inputMode='text' value={Aniversario} onChangeText={setAniversario} />
                        <TextInput style={styles.input} placeholder="Data de matrícula (dd/mm/yyyy)" inputMode='text' value={DataMatricula} onChangeText={setDataMatricula} />
                        <TextInput style={styles.input} placeholder="Próximo pagamento (dd/mm/yyyy)" inputMode='text' value={DataPagamento} onChangeText={setDataPagamento} />
                        <TextInput style={styles.input} placeholder="Endereço" inputMode='text' value={Endereco} onChangeText={setEndereco} />
                        <TextInput style={styles.input} placeholder="Patologia" inputMode='text' value={Patologia} onChangeText={setPatologia} />
                        <TextInput style={styles.input} placeholder="Turma um (código)" inputMode='text' value={TurmaUm} onChangeText={setTurmaUm} />
                        <TextInput style={styles.input} placeholder="Turma dois (código)" inputMode='text' value={TurmaDois} onChangeText={setTurmaDois} />
                        <Text style={styles.texto}>Sexo:</Text>
                        <Picker style={styles.input1}
                        selectedValue={Sexo}
                        onValueChange={(itemValue, itemIndex) =>
                            setSexo(itemValue)
                        }>
                        <Picker.Item label="Feminino" value="F" />
                        <Picker.Item label="Masculino" value="M" />
                        <Picker.Item label="Outro" value="o" />
                        </Picker>
                        <Text style={styles.texto}> Convênio:</Text>
                        <Picker style={styles.input1}
                        selectedValue={Convenio}
                        onValueChange={(itemValue, itemIndex) =>
                            setConvenio(itemValue)
                        }>
                        <Picker.Item label="Particular" value="Particular" />
                        <Picker.Item label="Projeto social" value="Projeto social" />
                        </Picker>
                        <Text style={styles.texto}> Modalidade:</Text>
                        <Picker style={styles.input1}
                        selectedValue={Modalidade}
                        onValueChange={(itemValue, itemIndex) =>
                            {SetModalidade(itemValue)}
                        }>
                        <Picker.Item label="Pilates no equipamentos x1" value="Pilates no equipamentos x1" />
                        <Picker.Item label="Pilates no equipamentos x2" value="Pilates no equipamentos x2" />
                        <Picker.Item label="Pilates no solo x1" value="Pilates no solo x1" />
                        <Picker.Item label="Pilates no solo x2" value="Pilates no solo x2" />
                        <Picker.Item label="Pilates funcional x1" value="Pilates funcional x1" />
                        <Picker.Item label="Pilates funcional x2" value="Pilates funcional x2" />
                        </Picker>
                    <TouchableOpacity style={styles.bo} onPress={paraPress}>
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
    input1:{
        fontSize:30,
        borderWidth:1,
        borderColor:'#4e5a5e',
        marginLeft:20,
        marginRight:20,
        color:'#000000ff',
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
    },
    texto:{
        fontSize:30,
        margin:15,
        color:'#4b2810ff',
        padding:5,
    },
});
