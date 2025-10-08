import { StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import { db } from '../ControleFirebase';
import { collection,doc,getDocs } from "firebase/firestore";
import { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function DetalhesAluno() {
    const route = useRoute();
    const {item} = route.params;
    return(
        <View style={styles.container}>
        <Text style={styles.texto}>{item.Nome}</Text>
        <View style={styles.card}>
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
                    <Text style={[styles.texto2, { textDecorationLine: 'underline' }]}>Turmas</Text>
                    <Text style={styles.texto2}>: {item.TurmaUm}, {item.TurmaDois}</Text>
                    </View>
                </View>
        </View>
    )
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
    marginTop:75,
    textAlign:'center',
    fontWeight:'bold'
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