import { StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import { db } from '../ControleFirebase';
import { collection,doc,getDocs } from "firebase/firestore";
import { useEffect, useState } from 'react';

export default function Alunos() {
  const [Alunos,setAlunos] = useState([]);
  
  useEffect(() => {
        async function carregarAlunos() {
            try{
                const querySnapshot = await getDocs(collection(db,'Alunos'));
                const lista = [];
                querySnapshot.forEach((doc) => {
                    lista.push({id: doc.id, ...doc.data()});
                });
                setAlunos(lista);
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
       <TouchableOpacity></TouchableOpacity>
       <FlatList data={Alunos} renderItem={({item}) => (
          <View style={styles.background}>
            <TouchableOpacity style={styles.touchContainer}>  
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
                    <Text style={[styles.texto2, { textDecorationLine: 'underline' }]}>Patologia</Text>
                    <Text style={styles.texto2}>: {item.Patologia}</Text>
                  </View>
                    <View style={{flexDirection: 'row'}}>
                    <Text style={[styles.texto2, { textDecorationLine: 'underline' }]}>Turma</Text>
                    <Text style={styles.texto2}>: {item.Turma}</Text>
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
    height: 200,
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