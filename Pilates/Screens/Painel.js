import { StyleSheet, Text, View } from 'react-native';

export default function Painel() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Painel</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d4a56f',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    fontFamily:'Overlock SC',
    color:'#4e5a5e'
  }
});
