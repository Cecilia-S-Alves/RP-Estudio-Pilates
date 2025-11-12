import { StyleSheet, Text, View, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { db } from '../ControleFirebase';
import { collection,doc,getDocs } from "firebase/firestore";
import { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function DetalhesAluno() {
    const route = useRoute();
    const {item} = route.params;
 
    return(
      <ScrollView contentContainerStyle={{flexGrow: 1, backgroundColor: '#b86516'}}>
        
        <View style={styles.container}>
        <Text style={styles.texto}>{item.Nome}</Text>
          <View style={styles.background}>
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
                  <View>
                    <Text style={[styles.texto2, { textDecorationLine: 'underline' }]}>Patologia:</Text>
                    <Text style={styles.texto2}>{item.Patologia}</Text>
                  </View>
                    <View style={{flexDirection: 'row'}}>
                    <Text style={[styles.texto2, { textDecorationLine: 'underline' }]}>Turmas:</Text>
                    <Text style={styles.texto2}> {item.TurmaUm}</Text><Text style={styles.texto2}>, {item.TurmaDois}</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                    <Text style={[styles.texto2,{ textDecorationLine: 'underline' }]}>Convênio:</Text>
                    <Text style={styles.texto2}> {item.Convenio}</Text>
                    </View>
                    <View >
                    <Text style={[styles.texto2,{ textDecorationLine: 'underline' }]}>Modalidade:</Text>
                    <Text style={styles.texto2}> {item.Modalidade} </Text>
                    </View>
                    <View>
                    <Text style={[styles.texto2,{ textDecorationLine: 'underline' }]}>Endereço:</Text>
                    <Text style={styles.texto2}>{item.Endereco}</Text>
                    </View>
                    <View >
                    <Text style={[styles.texto2,{ textDecorationLine: 'underline' }]}>Data de aniversário:</Text>
                    <Text style={styles.texto2}>{item.Aniversario}</Text>
                    </View>
                    <View >
                    <Text style={[styles.texto2,{ textDecorationLine: 'underline' }]}>Data da mensalidade:</Text>
                    <Text style={styles.texto2}>{item.DataPagamento}</Text>
                    </View>
                    <View >
                    <Text style={[styles.texto2,{ textDecorationLine: 'underline' }]}>Data de matrícula:</Text>
                    <Text style={styles.texto2}>{item.DataMatricula}</Text>
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
    color:'#000000ff',
    fontSize: 30,

  },
  background: {
    flex:1,
    alignSelf:'center',
    padding:5,
    backgroundColor: '#b99470',
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