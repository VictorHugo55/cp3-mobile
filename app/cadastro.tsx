import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Link } from 'expo-router';

const estados = [
    'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 
    'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 
    'SP', 'SE', 'TO'
];

export default function Cadastro() {
  const [produto, setProduto] = useState({
    nome: '', fabricacao: '', validade: '', quantidade: '', lote: '', codBarras: '', estado: 'SP'
  });

  const salvar = async () => {
    const dados = await AsyncStorage.getItem('produtos');
    const lista = dados ? JSON.parse(dados) : [];
    lista.push(produto);
    await AsyncStorage.setItem('produtos', JSON.stringify(lista));
    Alert.alert('Salvo com sucesso');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.label}>Nome:</Text>
      <TextInput style={styles.input} onChangeText={t => setProduto({ ...produto, nome: t })} />

      <Text style={styles.label}>Data de Fabricação:</Text>
      <TextInput style={styles.input} onChangeText={t => setProduto({ ...produto, fabricacao: t })} />

      <Text style={styles.label}>Validade:</Text>
      <TextInput style={styles.input} onChangeText={t => setProduto({ ...produto, validade: t })} />

      <Text style={styles.label}>Quantidade:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        onChangeText={t => setProduto({ ...produto, quantidade: t })}
      />

      <Text style={styles.label}>Lote:</Text>
      <TextInput style={styles.input} onChangeText={t => setProduto({ ...produto, lote: t })} />

      <Text style={styles.label}>Código de Barras:</Text>
      <TextInput
        style={styles.input}
        value={produto.codBarras}
        onChangeText={t => setProduto({ ...produto, codBarras: t })}
      />

      <Link href="/scanner" asChild>
        <TouchableOpacity style={styles.botao}>
          <Text style={styles.textoBotao}>Ler Código com Câmera</Text>
        </TouchableOpacity>
      </Link>

      <Text style={styles.label}>Estado:</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={produto.estado}
          onValueChange={v => setProduto({ ...produto, estado: v })}
        >
          {estados.map(uf => <Picker.Item label={uf} value={uf} key={uf} />)}
        </Picker>
      </View>

      <TouchableOpacity style={styles.botao} onPress={salvar}>
        <Text style={styles.textoBotao}>Salvar Produto</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f4f6f8',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 12,
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#fff',
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  botao: {
    backgroundColor: '#007bff',
    paddingVertical: 14,
    borderRadius: 12,
    marginTop: 16,
    alignItems: 'center',
  },
  textoBotao: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
