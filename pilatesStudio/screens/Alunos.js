import { StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import { db } from '../ControleFirebase';
import { collection,doc,getDocs,onSnapshot, query } from "firebase/firestore";
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native';

export default function Alunos() {
  const navigation = useNavigation();
  const [Alunos,setAlunos] = useState([]);
  const [nameSeach,setNameSeach] = useState('')
  
  useEffect(() => {
        async function carregarAlunos() {
            try{
             /*    const querySnapshot = await getDocs(collection(db,'Alunos'));
                const lista = [];
                querySnapshot.forEach((doc) => {
                    lista.push({id: doc.id, ...doc.data()});
                }); */
                let lista = []
                const databaseQuery = collection(db,"Alunos")
                onSnapshot(databaseQuery, (p) => {
                  lista = []
                  p.forEach(doc => {
                    const informacoes = {id: doc.id,... doc.data()}
                    lista.push(informacoes)
                  })
                  lista.forEach(informacoes => {
                    setAlunos(lista);
                  })
                })


            } catch(error){
                console.log('erro ao buscar alunos',error);
            }
        }
        carregarAlunos();
    },
    []);
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Alunos</Text>
       <TouchableOpacity onPress={()=> navigation.navigate("AddAluno")} style={styles.background1}><Text style={styles.texto1}>Adicionar aluno</Text></TouchableOpacity>
       <TextInput style={styles.background1} placeholder="Pesquisar..." inputMode='text' value={nameSeach} onChangeText={setNameSeach} ></TextInput>
       <FlatList data={Alunos.filter(item =>item.Nome.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').includes(nameSeach.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')))} renderItem={({item}) => (
          <View style={styles.background}>
            <TouchableOpacity style={styles.touchContainer} onPress={()=> navigation.navigate("DetalhesAluno", {item})}>  
                <View style={styles.card}>
                  <Text style={styles.texto1}>{item.Nome}</Text>
                  <View style={styles.nomedaview}>
                    <View style={{flexDirection: 'row'}}>
                      <Text style={[styles.texto2, { textDecorationLine: 'underline' }]}>Idade</Text>
                      <Text style={styles.texto2}>: {item.Idade}</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                      <Text style={[styles.texto2, { textDecorationLine: 'underline' }]}>Sexo</Text>
                      <Text style={styles.texto2}>: {item.Sexo}</Text>
                    </View>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={[styles.texto2, { textDecorationLine: 'underline' }]}>Convênio:</Text>
                    <Text style={styles.texto2}> {item.Convenio}</Text>
                  </View>
                    <View style={{flexDirection: 'row'}}>
                    <Text style={[styles.texto2, { textDecorationLine: 'underline' }]}>Turmas</Text>
                    <Text style={styles.texto2}>: {item.TurmaUm}</Text><Text style={styles.texto2}>, {item.TurmaDois}</Text>
                    </View>
                </View>
            </TouchableOpacity>
          </View>
        )} keyExtractor={item => item.id} showsVerticalScrollIndicator={false} numColumns={1} />
    </View>
    
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b86516',
    alignItems: 'center',
    
  },
  texto: {
    fontFamily:'Overlock SC',
    color:'#4e5a5e',
    fontSize: 70,
    marginTop:20
  },
  texto1: {
    fontFamily:'Overlock SC',
    color:'#000000ff',
    fontSize: 38,
    textAlign: 'center',
    fontWeight: 'bold'
  },
    texto2: {
    fontFamily:'Overlock SC',
    color:'#000000ff',
    fontSize: 32,

  },
  background: {
    alignSelf:'center',
    width: 380,
    height: 220,
    backgroundColor: '#b99470',
    borderRadius: 15,
    marginBottom: 20,
    elevation:5
  },
  background1: {
    alignSelf:'center',
    width: 380,
    height: 55,
    backgroundColor: '#b99470',
    borderRadius: 15,
    marginBottom: 20,
  },
  card:{
    backgroundColor: '',
    flex: 1,
    alignItems: 'center',
    
  },
  nomedaview:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  touchContainer:{
    flex:1,
  }
});