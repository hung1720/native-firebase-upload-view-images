import { StatusBar } from 'expo-status-bar';
import { StyleSheet,  View, Text, Image } from 'react-native';
import UploadScreen from './src/UploadScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <UploadScreen />
      <View style={{backgroundColor: 'pink', height: 400}}>
        <Text style={{color: 'black'}}>Hinh upload</Text>
        <Image 
          style={styles.image}
          source={{
            uri: 'https://firebasestorage.googleapis.com/v0/b/tutorial-firebase-image.appspot.com/o/0A3ED8E2-9F07-4345-921D-9422B6705632.jpg?alt=media&token=2d8db6b6-3501-44ef-a3ad-1d9d4e20dc77'
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: 400,
    height: 300,
    resizeMode: 'contain',
    borderRadius: 50
  }
});
