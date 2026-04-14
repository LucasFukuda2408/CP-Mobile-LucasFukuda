import { Text, StyleSheet, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function perfil() {
  const [nome, setNome] = useState('');
  const [rm, setRM] = useState('');
  const [disciplina, setDisciplina] = useState('');
  
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Perfil do Usuário</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Digite seu Usuario"
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
        <Image
        src="/profile.png"
        width={500}
        height={500}
        alt="Picture of the author"
        />      
    </View>
    </SafeAreaView>
  );
}

const [rm, setRm] = useState('');
navigation.navigate('Perfil', {
  nome,
  rm,
  disciplina,
  
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f2f0f385",
    alignItems: "center",
  },
  titulo: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 24,
    color: "blue",
  },
  perfilBox: {
    width: "100%",
    padding: 20,
    backgroundColor: "#d4d2d2",
    borderRadius: 10,
    alignItems: "center",
  },
  foto: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
  },
  texto: {
    fontSize: 16,
    marginBottom: 8,
  },
});