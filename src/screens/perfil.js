import { StyleSheet, Text, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Perfil({route}){
  const {nome, disciplina, telefone, cpf} = route.params || {};

  return (
    <SafeAreaView style={styles.container}>
      <Image 
        source={require('../../assets/foto-lucas.jpeg')} 
        style={styles.foto} 
      />
      <Text style={styles.titulo}>Perfil do Criador</Text>
      <Text style={styles.criadorTexto}>Nome: Lucas Fukuda</Text>
      <Text style={styles.criadorTexto}>RM: 562152</Text>
      
      <View style={styles.infoContainer}>
        <Text style={styles.subtitulo}>Dados Cadastrados</Text>
        <Text style={styles.infoTexto}>Nome: {nome}</Text>
        <Text style={styles.infoTexto}>Disciplina: {disciplina}</Text>
        <Text style={styles.infoTexto}>Telefone: {telefone}</Text>
        <Text style={styles.infoTexto}>CPF: {cpf}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f4f4f4",
    alignItems: "center",
  },
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 15,
    marginBottom: 5,
  },
  subtitulo: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
    marginTop: 20,
  },
  foto: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: 20,
  },
  criadorTexto: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 2,
  },
  infoContainer: {
    marginTop: 20,
    alignItems: "center",
    width: '100%',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  infoTexto: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: "500",
  }
});