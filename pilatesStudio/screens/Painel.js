import { StyleSheet, Text, View } from 'react-native';

const dataHoje = new Date()
const dataFormatada = dataHoje.toLocaleDateString();

const diasSemana = ["Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sábado"];
const diaSemanaAtual = dataHoje.getDay()
const dataSemanaFormatada = (diasSemana[diaSemanaAtual]);

console.log(dataFormatada)
export default function Painel() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>{dataFormatada} {dataSemanaFormatada}</Text>
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
    fontSize: 70,
    marginTop:20,
    alignSelf:'center'
  }
});
