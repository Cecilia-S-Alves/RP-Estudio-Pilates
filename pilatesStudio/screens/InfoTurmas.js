import { StyleSheet, Text, View, FlatList, TouchableOpacity, ScrollView } from 'react-native';

export default function DetalhesTurma() {
    return(
      <ScrollView contentContainerStyle={{flexGrow: 1, backgroundColor: '#939964'}}>
        <View style={styles.container}>
        <Text style={styles.texto}>Informações</Text>
          <View style={styles.background}>
                      <Text style={[styles.texto2, { textDecorationLine: 'underline'}]}>Código:</Text>
                      <Text style={styles.texto2}>O código de turma é composto de 4 números.                                  O primeiro é referente ao dia da semana daqule turma:                                       1- Segunda e Quarta           2- Terça e Quinta                    O segundo é referente à modalidade:                             1- Equipamentos                    2- Solo                                     3- Funcional                                4- Misto                                    Os últimos dois números são referentes ao horário.
 </Text>               
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