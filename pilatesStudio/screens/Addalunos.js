import { StyleSheet, Text, View } from 'react-native';

export default function Addalunos() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Addalunos</Text>
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
  }
});
