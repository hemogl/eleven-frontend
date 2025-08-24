import MapView from "react-native-maps";
import { StyleSheet } from "react-native";

function MapComponent() {
  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: 48.866667,
        longitude: 2.333333,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    ></MapView>
  );
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default MapComponent;
