import { StyleSheet, Text, View, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { db } from '../ControleFirebase';
import { collection,doc,getDocs } from "firebase/firestore";
import { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function DetalhesTurma() {
    const route = useRoute();
    const {item} = route.params;
 
    return(
      <ScrollView contentContainerStyle={{flexGrow: 1, backgroundColor: '#939964'}}>
        
        <View style={styles.container}>
        <Text style={styles.texto}>{item.Codigo}</Text>
          <View style={styles.background}>
                  <View style={styles.nomedaview}>
                    <View style={{flexDirection: 'row'}}>
                      <Text style={[styles.texto2, { textDecorationLine: 'underline'}]}>Vagas</Text>
                      <Text style={styles.texto2}>: {item.VagasLivres}</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                      <Text style={[styles.texto2, { textDecorationLine: 'underline' }]}>Ocupadas</Text>
                      <Text style={styles.texto2}>: {item.VagasOcupadas}</Text>
                    </View>
                  </View>
                  <View>
                    <Text style={[styles.texto2, { textDecorationLine: 'underline' }]}>Horário:</Text>
                    <Text style={styles.texto2}>{item.Horario}</Text>
                  </View>
                    <View>
                    <Text style={[styles.texto2,{ textDecorationLine: 'underline' }]}>Dias da Semana:</Text>
                    <Text style={styles.texto2}> {item.DiasSemana}</Text>
                    </View>
                    <View>
                    <Text style={[styles.texto2,{ textDecorationLine: 'underline' }]}>Modalidade:</Text>
                    <Text style={styles.texto2}> {item.Modalidade} </Text>
                    </View>
                    <View>
                    <Text style={[styles.texto2,{ textDecorationLine: 'underline' }]}>Notas:</Text>
                    <Text style={styles.texto2}>{item.Notas}</Text>
                    </View>                 
                </View>
        </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    flex:1,
    alignSelf:'center',
    padding:5,
    backgroundColor: '#cde2db',
    borderRadius: 15,
    marginBottom: 20,
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