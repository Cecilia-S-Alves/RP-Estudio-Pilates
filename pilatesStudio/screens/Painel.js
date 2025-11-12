import { StyleSheet, Text, View,FlatList, TouchableOpacity  } from 'react-native';
import { db } from '../ControleFirebase';
import { collection,onSnapshot, } from "firebase/firestore";
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const dataHoje = new Date()
const dataFormatada = dataHoje.toLocaleDateString();

const diasSemana = ["Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sábado"];
const diaSemanaAtual = dataHoje.getDay()
const dataSemanaFormatada = (diasSemana[diaSemanaAtual]);

export default function Painel() {
  const navigation = useNavigation();
  const [Turma,setTurma] = useState([]);

    useEffect(() => {
              async function carregarTurma() {
                  try{
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
      <FlatList>
      <Text style={styles.texto}>{dataFormatada} {dataSemanaFormatada}</Text>
      <View style={styles.background}>
        <Text style={styles.texto}>Aulas de hoje</Text>
            <FlatList data={Turma.filter(item =>item.DiasSemana.normalize('NFD').replace(/[\u0300-\u036f]/g, '').includes((diasSemana[diaSemanaAtual]).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')))}  renderItem={({item}) => (
                  <View style={styles.background1}>
                    <TouchableOpacity style={styles.touchContainer} onPress={()=> navigation.navigate("DTurma", {item})}>  
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
      </FlatList>
    </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d4a56f',
    alignItems: 'center',
    
  },
  texto: {
    fontFamily:'Overlock SC',
    color:'#4e5a5e',
    fontSize: 60,
    marginTop:20,
    alignSelf:'center'
  },
   background: {
    flex:1,
    alignSelf:'center',
    padding:5,
    backgroundColor: '#b86516',
    borderRadius: 15,
    marginBottom: 20,
  },
    background1: {
    alignSelf:'center',
    width: 380,
    height: 220,
    backgroundColor: '#cde2db',
    borderRadius: 15,
    marginBottom: 20,
    elevation: 5
  },
  touchContainer:{
    flex:1,
  },
  card:{
    backgroundColor: '',
    flex: 1,
    alignItems: 'center',
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
});
