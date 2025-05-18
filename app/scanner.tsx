import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { useState } from 'react';
import { useRouter } from 'expo-router';

export default function Scanner() {
  const [permission, requestPermission] = useCameraPermissions();
  const [scanned, setScanned] = useState(false);
  const router = useRouter();

  if (!permission) return <Text>Verificando permissões...</Text>;
  if (!permission.granted) return <Button title="Permitir câmera" onPress={requestPermission} />;

  return (
    <View style={styles.container}>
      <CameraView
        style={StyleSheet.absoluteFill}
        barcodeScannerSettings={{ barcodeTypes: ['ean13', 'code128', 'ean8', 'qr'] }}
        onBarcodeScanned={({ data }) => {
          if (!scanned) {
            setScanned(true);
            router.back();
            Alert.alert('Código escaneado', data);
          }
        }}
      />

      {/* Overlay para destacar a área do scanner */}
      <View style={styles.overlay}>
        <View style={styles.borderTopLeft} />
        <View style={styles.borderTopRight} />
        <View style={styles.borderBottomLeft} />
        <View style={styles.borderBottomRight} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  // Moldura do scanner - o quadrado transparente com cantos destacados
  borderTopLeft: {
    position: 'absolute',
    top: '40%',
    left: '20%',
    width: 30,
    height: 30,
    borderTopWidth: 4,
    borderLeftWidth: 4,
    borderColor: 'white',
  },
  borderTopRight: {
    position: 'absolute',
    top: '40%',
    right: '20%',
    width: 30,
    height: 30,
    borderTopWidth: 4,
    borderRightWidth: 4,
    borderColor: 'white',
  },
  borderBottomLeft: {
    position: 'absolute',
    bottom: '40%',
    left: '20%',
    width: 30,
    height: 30,
    borderBottomWidth: 4,
    borderLeftWidth: 4,
    borderColor: 'white',
  },
  borderBottomRight: {
    position: 'absolute',
    bottom: '40%',
    right: '20%',
    width: 30,
    height: 30,
    borderBottomWidth: 4,
    borderRightWidth: 4,
    borderColor: 'white',
  },
});
