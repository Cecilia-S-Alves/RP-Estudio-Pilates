import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { useState,useEffect } from 'react';
import { db} from '../ControleFirebase';
import { collection,onSnapshot } from 'firebase/firestore';

export default function Mensalidade() {
    const [Mensalidade,SetMensalidade] = useState([]);
    
    useEffect(() => {
          async function carregarMensalidade() {
              try{
                  let lista = []
                  const databaseQuery = collection(db,"Mensalidade")
                  onSnapshot(databaseQuery, (p) => {
                    lista = []
                    p.forEach(doc => {
                      const informacoes = {id: doc.id,... doc.data()}
                      lista.push(informacoes)
                    })
                    lista.forEach(informacoes => {
                      SetMensalidade(lista);
                    })
                  })
  
  
              } catch(error){
                  console.log('erro ao buscar Mensalidades',error);
              }
          }
          carregarMensalidade();
      },
      []);
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Mensalidade</Text>
      <FlatList data={Mensalidade} renderItem={({item}) => (
                <View style={styles.background}>
                  <View style={styles.touchContainer}>  
                      <View style={styles.card}>
                        <Text style={styles.texto1}>{item.Nome}</Text>
                        
                          <View style={{flexDirection: 'row'}}>
                            <Text style={[styles.texto2, { textDecorationLine: 'underline' }]}>Data</Text>
                            <Text style={styles.texto2}>: {item.DataPagamento}</Text>
                          </View>
                          <View style={{flexDirection: 'row'}}>
                            <Text style={[styles.texto2, { textDecorationLine: 'underline' }]}>Preço</Text>
                            <Text style={styles.texto2}>:R$ {item.Preco}</Text>
                          </View>
                        
                        <View style={{flexDirection: 'row'}}>
                          <Text style={[styles.texto2, { textDecorationLine: 'underline' }]}>Status</Text>
                          <Text style={styles.texto2}>: {item.Status}</Text>
                        </View>
                      </View>
                      <TouchableOpacity style={styles.botao}><Text style={styles.textobotao}>Pago</Text></TouchableOpacity>
                  </View>
                </View>
              )} keyExtractor={item => item.id} showsVerticalScrollIndicator={false} numColumns={1} />
          </View>
  );
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
  textobotao: {
    fontFamily:'Overlock SC',
    color:'#939964',
    fontSize: 32,
    textAlign:'center',
    fontWeight:'bold'

  },
  background: {
    alignSelf:'center',
    width: 380,
    height: 240,
    backgroundColor: '#939964',
    borderRadius: 15,
    marginBottom: 20,
  },
  botao: {
    alignSelf:'center',
    width: 180,
    height: 50,
    backgroundColor: '#4e5a5e',
    borderRadius: 15,
    marginBottom: 10,
  },
  background1: {
    alignSelf:'center',
    width: 380,
    height: 55,
    backgroundColor: '#939964',
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
