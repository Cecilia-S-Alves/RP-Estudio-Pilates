import { StyleSheet, Text, View } from 'react-native';

export default function Alunos() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Alunos</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b86516',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    fontFamily:'Overlock SC',
    color:'#4e5a5e'
  }
});