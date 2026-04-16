import { TextInput, Button, StyleSheet, Text, View, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState, useEffect } from 'react';
import { MaskedTextInput } from 'react-native-mask-text';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

export default function CadastroScreen(){
  const navigation = useNavigation();
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [disciplina, setDisciplina] = useState('');
  const [cpf, setCPF] = useState('');

  useEffect(() => {
  async function carregarDados() {
    try {
      const dadosSalvos = await AsyncStorage.getItem('dadosUsuario');
      if (dadosSalvos !== null) {
        const dados = JSON.parse(dadosSalvos);
        setNome(dados.nome || '');
        setTelefone(dados.telefone || '');
        setDisciplina(dados.disciplina || '');
        setCPF(dados.cpf || '');
      }
    } catch (error) {
      console.log("Erro ao carregar dados:", error);
    }
  }
  carregarDados();
}, []); 

  async function enviarDados() {
    console.log("1. Botão clicado!");

    if (!nome || !telefone || !disciplina || !cpf) {
      Alert.alert("Erro", "Preencha todos os campos obrigatórios!");
      console.log("2. Erro de validação: campos vazios.");
      return;
    }

    const dados = { nome, telefone, disciplina, cpf };
    console.log("3. Dados validados:", dados);

    try {
      await AsyncStorage.setItem('dadosUsuario', JSON.stringify(dados));
      console.log("4. Dados salvos no AsyncStorage com sucesso!");
      
      navigation.navigate('Perfil', dados);
      console.log("5. Comando de navegação disparado!");
    } catch (error) {
      console.error("Erro ao salvar no AsyncStorage:", error);
      Alert.alert("Erro", "Não foi possível salvar os dados.");
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Formulário Cadastro</Text>

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
          mask="(99) 9999999-9999"
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