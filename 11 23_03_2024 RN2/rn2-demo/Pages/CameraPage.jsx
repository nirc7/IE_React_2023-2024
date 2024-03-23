import { Camera, CameraType } from 'expo-camera';
import { useState } from 'react';
import { Dimensions, Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function CameraPage() {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [camera, setCamera] = useState(null);
  const [picUri, setPicUri] = useState('https://upload.wikimedia.org/wikipedia/commons/2/25/Coldplay_%282842037407%29.jpg');

  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraType() {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }

  return (
    <View style={styles.container}>
      <Camera
        ref={ref => setCamera(ref)}
        style={styles.camera} type={type}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
            <Text style={styles.text}>Flip Camera</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}
            onPress={async () => {
              if (camera) {
                const data = await camera.takePictureAsync(null); 
                console.log(data.uri)
                setPicUri(data.uri);
              }
            }}>
            <Text style={styles.text}>Snap</Text>
          </TouchableOpacity>
        </View>
      </Camera>

      <Image
        source={{ uri: picUri }}
        style={{ width: windowWidth*.9, height: windowHeight*.4, borderWidth: 1, borderColor: 'red', margin: 10 }} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  camera: {
    flex: 0.5,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'white',
  },
});
