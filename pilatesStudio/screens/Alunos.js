import { StyleSheet, Text, View } from 'react-native';
import { db } from '../ControleFirebase';
import { collection,doc,getDocs } from "firebase/firestore";
import { useEffect, useState } from 'react';
import { FlatList } from 'react-native-web';

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
       <Text style={styles.texto1}>mostrar dados na tela</Text> 
    </View>);

    


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
    fontSize: 40
  }
});