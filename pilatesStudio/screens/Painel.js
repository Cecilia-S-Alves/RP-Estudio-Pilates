import { StyleSheet, Text, View,FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { db } from '../ControleFirebase';
import { collection,onSnapshot, } from "firebase/firestore";
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';


const dataHoje = new Date()
const dataFormatada = dataHoje.toLocaleDateString();

const diasSemana = ["Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sábado"];
const diaSemanaAtual = dataHoje.getDay()
const dataSemanaFormatada = (diasSemana[diaSemanaAtual]);

const [dia, mes] = dataFormatada.split('/');
const pesquisaani = `${dia}/${mes}`;
let Aniverario = ""
let auladia = ""
if (diaSemanaAtual===1 || diaSemanaAtual===3 ){
  auladia = "1- Segunda e Quarta"
}else if (diaSemanaAtual===2 || diaSemanaAtual===4 ){
  auladia = "2- Terça e Quinta"
}

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
              const [Alunos,setAlunos] = useState([]);
              
              useEffect(() => {
                    async function carregarAlunos() {
                        try{
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
      <ScrollView>
       <View style={styles.header}>
        <View>
          <Text style={styles.data}>{dataFormatada}</Text>
          <Text style={styles.diaSemana}>{dataSemanaFormatada}</Text>
        </View>
      </View>
      <View style={styles.background}>
        <Text style={styles.texto}>Aulas de hoje</Text>
            <FlatList data={Turma.filter(item =>item?.DiasSemana=== auladia)}  renderItem={({item}) => (
                  <View style={styles.background1}>
                    <TouchableOpacity style={styles.touchContainer} onPress={()=> navigation.navigate("D2Turma", {item})}>  
                        
                        <Text style={styles.codigo}>{item.Codigo}</Text>
                        <View style={styles.infoRow}>
                          <Text style={styles.label}>Horário:</Text>
                          <Text style={styles.valor}>{item.Horario}</Text>
                        </View>

                        <View style={styles.infoRow}>
                          <Text style={styles.label}>Modal:</Text>
                          <Text style={styles.valor}>{item.Modalidade}</Text>
                        </View>

                    </TouchableOpacity>
                  </View>
                )} keyExtractor={item => item.id} showsVerticalScrollIndicator={false} numColumns={1} />
            </View>
             
                  
                    <FlatList data={Alunos.filter(item =>item?.Aniversario === pesquisaani)} renderItem={({item}) => (
                      <View style={styles.background}>
                        <Text style={styles.texto}>Aniversários:</Text>
                        <TouchableOpacity style={styles.touchContainer} onPress={()=> navigation.navigate("DAluno", {item})}>  
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
          
            </ScrollView>
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
    padding:10,
    backgroundColor: '#b86516',
    borderRadius: 15,
    marginBottom: 20,
  },
    background1: {
    alignSelf:'center',
    width: 300,
    height: 220,
    backgroundColor: '#cde2db',
    borderRadius: 15,
    marginBottom: 20,
    padding:10,
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
   header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#b86516',
    borderRadius: 15,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 20,
    gap: 15,
    elevation: 4,
    marginTop:10
  },
  data: {
    fontFamily: 'Overlock SC',
    fontSize: 64,
    color: '#4e5a5e',
    fontWeight: 'bold',
  },
  diaSemana: {
    fontFamily: 'Overlock SC',
    fontSize: 60,
    color: '#4e5a5e',
  },

  titulo: {
    fontFamily: 'Overlock SC',
    color: '#f1f1f1',
    fontSize: 38,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
  },

  codigo: {
    fontFamily: 'Overlock SC',
    fontSize: 34,
    color: '#2f2f2f',
    fontWeight: 'bold',
    marginBottom: 8,
  },

  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginVertical: 3,
  },
  label: {
    fontFamily: 'Overlock SC',
    color: '#3b3b3b',
    fontSize: 24,
    textDecorationLine: 'underline',
  },

  titulo: {
    fontFamily: 'Overlock SC',
    color: '#f1f1f1',
    fontSize: 38,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
  },

  // cards individuais das turmas
  card: {
    backgroundColor: '#cde2db',
    borderRadius: 15,
    padding: 18,
    alignItems: 'center',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 4,
  },
  codigo: {
    fontFamily: 'Overlock SC',
    fontSize: 34,
    color: '#2f2f2f',
    fontWeight: 'bold',
    marginBottom: 8,
  },

  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginVertical: 3,
  },
  label: {
    fontFamily: 'Overlock SC',
    color: '#3b3b3b',
    fontSize: 24,
    textDecorationLine: 'underline',
  },
  valor: {
    fontFamily: 'Overlock SC',
    color: '#2f2f2f',
    fontSize: 24,
  },

});
