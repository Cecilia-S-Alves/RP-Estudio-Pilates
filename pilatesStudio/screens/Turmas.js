import { StyleSheet, Text, View } from 'react-native';

export default function Turmas() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Turmas</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#939964',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    fontFamily:'Overlock SC',
    color:'#4e5a5e'
  }
});