import { TextInput, Button, StyleSheet, Text, View, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState, useEffect } from 'react';
import { MaskedTextInput } from 'react-native-mask-text';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Cadastrado({ navigation }) {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [disciplina, setDisciplina] = useState('');
  const [cpf, setCPF] = useState('');

  useEffect(() => {
    async function carregarDados() {
      const dadosSalvos = await AsyncStorage.getItem('dadosUsuario');
      if (dadosSalvos) {
        const dados = JSON.parse(dadosSalvos);
        setNome(dados.nome);
        setTelefone(dados.telefone);
        setDisciplina(dados.disciplina);
        setCPF(dados.cpf);
      }
    }
    carregarDados();
  }, []);

  async function enviarDados() {
    if (!nome || !telefone || !disciplina || !cpf) {
      Alert.alert("Erro", "Preencha todos os campos obrigatórios!");
      return;
    }

    const dados = { nome, telefone, disciplina, cpf };
    await AsyncStorage.setItem('dadosUsuario', JSON.stringify(dados));
    
    navigation.navigate('perfil');
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
        <MaskedTextInput
          style={styles.input}
          mask="(99) 99999-9999"
          placeholder="Digite seu telefone"
          keyboardType="numeric"
          value={telefone}
          onChangeText={setTelefone}
        />
        <MaskedTextInput
          style={styles.input}
          mask="999.999.999-99"
          placeholder="Digite seu CPF"
          keyboardType="numeric"
          value={cpf}
          onChangeText={setCPF}
        />
        <Button title="Salvar/Enviar" color="#ec0707" onPress={enviarDados} />
      </View>
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
  }
});