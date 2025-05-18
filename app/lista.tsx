import { View, Text, FlatList, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Lista() {
  const [produtos, setProdutos] = useState<any[]>([]);

  const carregarProdutos = async () => {
    const dados = await AsyncStorage.getItem('produtos');
    if (dados) setProdutos(JSON.parse(dados));
  };

  const excluirProduto = async (index: number) => {
    const novos = [...produtos];
    novos.splice(index, 1);
    await AsyncStorage.setItem('produtos', JSON.stringify(novos));
    setProdutos(novos);
    Alert.alert('Produto excluído com sucesso!');
  };

  useEffect(() => {
     carregarProdutos();
    
  }, []);

  return (
     <View style={styles.container}>
      <Text style={styles.titulo}>Lista de Produtos</Text>
      <FlatList
        data={produtos}
        keyExtractor={(_, i) => i.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemTexto}>Nome: {item.nome}</Text>
            <Text style={styles.itemTexto}>Validade: {item.validade}</Text>
            <Text style={styles.itemTexto}>Qtd: {item.quantidade}</Text>
            <TouchableOpacity style={styles.botaoExcluir} onPress={() => excluirProduto(index)}>
              <Text style={styles.textoBotao}>Excluir</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f4f6f8',
    flex: 1,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color: '#333',
  },
  itemContainer: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  itemTexto: {
    fontSize: 16,
    marginBottom: 6,
  },
  botaoExcluir: {
    backgroundColor: '#dc3545',
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 8,
  },
  textoBotao: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
