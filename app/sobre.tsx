import { View, Text, StyleSheet, Image, Linking, TouchableOpacity } from 'react-native';

const desenvolvedores = [
  {
    nome: 'Victor Hugo Carvalho Pereira',
    rm: 'RM: 558550',
    foto: 'https://i.pravatar.cc/150?img=12', // Exemplo de avatar genérico
    email: 'victor@example.com',
    linkedin: 'https://www.linkedin.com/in/victorhugocarvalho',
  },
  {
    nome: 'Gabriel Gomes Mancera ',
    rm: "RM: 555427",
    foto: 'https://i.pravatar.cc/150?img=5',
    email: 'gabriel@example.com',
    linkedin: 'https://www.linkedin.com/in/gabriel',
  },
];

export default function Sobre() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Desenvolvedores</Text>
      {desenvolvedores.map((dev, i) => (
        <View key={i} style={styles.card}>
          <Image source={{ uri: dev.foto }} style={styles.foto} />
          <View style={styles.info}>
            <Text style={styles.nome}>{dev.nome}</Text>
            {dev.rm && <Text style={styles.rm}>{dev.rm}</Text>}
            <TouchableOpacity onPress={() => Linking.openURL(`mailto:${dev.email}`)}>
              <Text style={styles.link}>Email</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Linking.openURL(dev.linkedin)}>
              <Text style={styles.link}>LinkedIn</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fafafa',
    flex: 1,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#222',
    textAlign: 'center',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: 'white',
    marginBottom: 20,
    padding: 15,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    alignItems: 'center',
  },
  foto: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  info: {
    marginLeft: 15,
    flex: 1,
  },
  nome: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 4,
    color: '#333',
  },
  rm: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  link: {
    color: '#1E90FF',
    fontSize: 16,
    marginBottom: 4,
  },
});
