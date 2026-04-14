import { useState } from 'react';
import { TextInput, StyleSheet, Text, View, Button, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Perfil({ navigation }) {
  const [nome, setNome] = useState('');
  const [rm, setRM] = useState('');
  const [disciplina, setDisciplina] = useState('');

  function irPerfil() {
    navigation.navigate('PerfilDetalhe', {
      nome,
      rm,
      disciplina,
    });
  }


  return (
    <SafeAreaView style={styles.container}>
      <Image 
        source={{ uri: 'WhatsApp Image 2026-04-14 at 9.46.41 AM.jpeg' }} 
        style={styles.foto} 
      />

      <Text style={styles.titulo}>Perfil de Usuário do Criador</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome"
          value={nome}
          onChangeText={setNome}
        />
        
        <TextInput
          style={styles.input}
          placeholder="Digite seu RM"
          value={rm}
          onChangeText={setRM}
        />

        <TextInput
          style={styles.input}
          placeholder="Digite sua disciplina"
          value={disciplina}
          onChangeText={setDisciplina}
        />
        <Button title="Salvar" onPress={irPerfil} />
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
    marginVertical: 15,
  },

  foto: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: 20,
  },

  form: {
    width: "100%",
    marginTop: 20,
  },

  input: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 10,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#ddd",
  },

  botao: {
    backgroundColor: "#3fb68b",
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },

  botaoTexto: {
    color: "#fff",
    fontWeight: "bold",
  },

  resultado: {
    marginTop: 20,
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 10,
    width: "100%",
  },

  resultadoTitulo: {
    fontWeight: "bold",
    marginBottom: 10,
  },
});