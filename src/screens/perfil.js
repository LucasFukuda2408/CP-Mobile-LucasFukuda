import { StyleSheet, Text, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Perfil() {
  return (
    <SafeAreaView style={styles.container}>
      <Image 
        source={require('../../WhatsApp Image 2026-04-14 at 9.46.41 AM.jpeg')} 
        style={styles.foto} 
      />
      <Text style={styles.titulo}>Perfil do Criador</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.infoTexto}>Nome:Lucas Fukuda</Text>
        <Text style={styles.infoTexto}>RM: 562152</Text>
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
  infoContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  infoTexto: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: "500",
  }
});