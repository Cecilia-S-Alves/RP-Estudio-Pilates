import { StyleSheet, Text, View, FlatList, TouchableOpacity,TextInput} from 'react-native';
import { db } from '../ControleFirebase';
import { collection,doc,getDocs,onSnapshot, query } from "firebase/firestore";
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { orderBy } from 'firebase/firestore';


export default function Turmas() {
  const navigation = useNavigation();
    const [Turma,setTurma] = useState([]);
    const [groupSeach,setGroupSeach] = useState('')
    
    useEffect(() => {
          async function carregarTurma() {
              try{
               /*    const querySnapshot = await getDocs(collection(db,'Turma'));
                  const lista = [];
                  querySnapshot.forEach((doc) => {
                      lista.push({id: doc.id, ...doc.data()});
                  }); */
                  let lista = []
                  const databaseQuery = collection(db,"Turmas")
                  onSnapshot(databaseQuery, (p) => {
                    lista = []
                    p.forEach(doc => {
                      const informacoes = {id: doc.id,... doc.data()}
                      lista.push(informacoes)
                    })
                    lista.forEach(informacoes => {
                      setTurma(lista);
                    })
                  })
  
  
              } catch(error){
                  console.log('erro ao buscar Turma',error);
              }
          }
          carregarTurma();
      },
      []);
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Turmas</Text>
    <TouchableOpacity onPress={()=> navigation.navigate("InfoTurmas")} style={styles.background1}><Text style={styles.texto1}>Como funciona?</Text></TouchableOpacity>
           <TextInput style={styles.background1} placeholder="Pesquisar..." inputMode='text' value={groupSeach} onChangeText={setGroupSeach} ></TextInput>
           <FlatList data={Turma.filter(item =>item.Codigo.normalize('NFD').replace(/[\u0300-\u036f]/g, '').includes(groupSeach.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')))}  renderItem={({item}) => (
              <View style={styles.background}>
                <TouchableOpacity style={styles.touchContainer} onPress={()=> navigation.navigate("DetalhesTurma", {item})}>  
                    <View style={styles.card}>
                      <Text style={styles.texto1}>{item.Codigo}</Text>
                        <View style={{flexDirection: 'row'}}>
                          <Text style={[styles.texto2, { textDecorationLine: 'underline' }]}>Dias</Text>
                          <Text style={styles.texto2}>: {item.DiasSemana}</Text>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                          <Text style={[styles.texto2, { textDecorationLine: 'underline' }]}>Horário</Text>
                          <Text style={styles.texto2}>: {item.Horario}</Text>
                        </View>
                      <View style={{flexDirection: 'row'}}>
                        <Text style={[styles.texto2, { textDecorationLine: 'underline' }]}>Modal</Text>
                        <Text style={styles.texto2}>: {item.Modalidade}</Text>
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
    backgroundColor: '#939964',
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
    color:'#4e5a5e',
    fontSize: 38,
    textAlign: 'center',
    fontWeight: 'bold'
  },
    texto2: {
    fontFamily:'Overlock SC',
    color:'#4e5a5e',
    fontSize: 32,

  },
  background: {
    alignSelf:'center',
    width: 380,
    height: 220,
    backgroundColor: '#cde2db',
    borderRadius: 15,
    marginBottom: 20,
  },
  background1: {
    alignSelf:'center',
    width: 380,
    height: 55,
    backgroundColor: '#cde2db',
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