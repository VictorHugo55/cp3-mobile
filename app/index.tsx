// app/index.tsx
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function Home() {
  return (
    <View style={styles.container }>

        <Text style={styles.titulo}>Menu Principal</Text>

        <Link href="/cadastro" asChild>
        <TouchableOpacity style={styles.botao}>
          <Text style={styles.textoBotao}>Cadastrar Produto</Text>
        </TouchableOpacity>
      </Link>

      <Link href="/lista" asChild>
        <TouchableOpacity style={styles.botao}>
          <Text style={styles.textoBotao}>Listar Produtos</Text>
        </TouchableOpacity>
      </Link>

      <Link href="/sobre" asChild>
        <TouchableOpacity style={styles.botao}>
          <Text style={styles.textoBotao}>Desenvolvedores</Text>
        </TouchableOpacity>
      </Link>

    </View>
  );

}
const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: '#f4f6f8',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: '#333',
  },
  botao: {
    backgroundColor: '#007bff',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 12, // Borda arredondada
    marginBottom: 16,
    alignItems: 'center',
  },
  textoBotao: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  }
});