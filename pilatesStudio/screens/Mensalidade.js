import { StyleSheet, Text, View } from 'react-native';

export default function Mensalidade() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Mensalidade</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cde2db',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    fontFamily:'Overlock SC',
    color:'#4e5a5e'
  }
});
