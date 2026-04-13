import { TextInput, Button, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState, useEffect } from 'react';

export default function App() {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [disciplina, setDisciplina] = useState('');
  const [cpf, setCPF] = useState('');
  const [dadosEnviados, setDadosEnviados] = useState(null);

  useEffect(() => {
    console.log("O Aplicativo foi Iniciado!");
  }, []);

  function enviarDados() {
    setDadosEnviados({
      nome,
      telefone,
      disciplina,
      cpf,
    });
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Formulário Cadastrado</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome"
          value={nome}
          onChangeText={setNome}
        />
        <TextInput
          style={styles.input}
          placeholder="Digite sua disciplina"
          value={disciplina}
          onChangeText={setDisciplina}
        />
        <TextInput
          style={styles.input}
          placeholder="Digite seu Telefone"
          value={telefone}
          onChangeText={setTelefone}
        />
        <TextInput
          style={styles.input}
          placeholder="Digite seu CPF"
          value={cpf}
          onChangeText={setCPF}
        />
        <Button title="Enviar" color="#ec0707" onPress={enviarDados} />
      </View>

      {dadosEnviados && (
        <View style={styles.resultado}>
          <Text style={styles.resultadoTitulo}>Os seguintes dados foram enviados:</Text>
          <Text>Nome: {dadosEnviados.nome}</Text>
          <Text>Telefone: {dadosEnviados.telefone}</Text>
          <Text>Disciplina: {dadosEnviados.disciplina}</Text>
          <Text>CPF: {dadosEnviados.cpf}</Text>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f2f0f385",
  },
  titulo: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 24,
    color: "blue",
  },
  form: {
    marginBottom: 22,
  },
  input: {
    borderWidth: 1,
    borderColor: "#080808",
    backgroundColor: "#d4d2d2",
    color: "#000",
    padding: 10,
    marginBottom: 14,
    borderRadius: 5,
  },
  resultado: {
    marginTop: 20,
    padding: 15,
    borderColor: "#080808",
    backgroundColor: "#d4d2d2",
    borderRadius: 5,
  },
  resultadoTitulo: {
    fontWeight: "bold",
    marginBottom: 10,
    color: "#25b3eb",
  },
});